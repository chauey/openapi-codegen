"use strict";
// 'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
const util = require('util');
// import * as util from 'util';
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const Hogan = require('hogan.js');
// const clone = require('reftools/lib/clone.js').deepClone; // must preserve functions
const clone_1 = require("./node_modules/reftools/lib/clone"); // must preserve functions
// import deepClone from 'reftools'; // must preserve functions
const adaptor = require('./adaptor.js');
// allows other backends, such as a stream writer for .tar.gz files
let ff = {
    readFileSync: fs.readFileSync,
    createFile: fs.writeFileSync,
    rimraf: rimraf,
    mkdirp: mkdirp
};
function tpl(...segments) {
    return path.join(__dirname, 'templates', ...segments);
}
function main(o, config, configName, callback) {
    let outputDir = config.outputDir || './out/';
    let verbose = config.defaults.verbose;
    config.defaults.configName = configName;
    adaptor.transform(o, config.defaults, function (err, model) {
        for (let p in config.partials) {
            let partial = config.partials[p];
            if (verbose)
                console.log('Processing partial ' + partial);
            config.partials[p] = ff.readFileSync(tpl(configName, partial), 'utf8');
        }
        let actions = [];
        for (let t in config.transformations) {
            let tx = config.transformations[t];
            if (tx.input) {
                if (verbose)
                    console.log('Processing template ' + tx.input);
                tx.template = ff.readFileSync(tpl(configName, tx.input), 'utf8');
            }
            actions.push(tx);
        }
        const subDir = (config.defaults.flat ? '' : configName);
        if (verbose)
            console.log('Making/cleaning output directories');
        ff.mkdirp(path.join(outputDir, subDir), function () {
            ff.rimraf(path.join(outputDir, subDir) + '/*', function () {
                if (config.directories) {
                    for (let directory of config.directories) {
                        ff.mkdirp.sync(path.join(outputDir, subDir, directory));
                    }
                }
                for (let action of actions) {
                    if (verbose)
                        console.log('Rendering ' + action.output);
                    let template = Hogan.compile(action.template);
                    let content = template.render(model, config.partials);
                    ff.createFile(path.join(outputDir, subDir, action.output), content, 'utf8');
                }
                if (config.touch) { // may not now be necessary
                    let touchTmp = Hogan.compile(config.touch);
                    let touchList = touchTmp.render(model, config.partials);
                    let files = touchList.split('\r').join('').split('\n');
                    for (let file of files) {
                        file = file.trim();
                        if (file) {
                            if (!fs.existsSync(path.join(outputDir, subDir, file))) {
                                ff.createFile(path.join(outputDir, subDir, file), '', 'utf8');
                            }
                        }
                    }
                }
                if (config.apache) {
                    ff.createFile(path.join(outputDir, subDir, 'LICENSE'), ff.readFileSync(tpl('_common', 'LICENSE'), 'utf8'), 'utf8');
                }
                else {
                    ff.createFile(path.join(outputDir, subDir, 'LICENSE'), ff.readFileSync(tpl('_common', 'UNLICENSE'), 'utf8'), 'utf8');
                }
                let outer = model;
                if (config.perApi) {
                    let toplevel = clone_1.deepClone(model);
                    delete toplevel.apiInfo;
                    for (let pa of config.perApi) {
                        let fnTemplate = Hogan.compile(pa.output);
                        let template = Hogan.compile(ff.readFileSync(tpl(configName, pa.input), 'utf8'));
                        for (let api of model.apiInfo.apis) {
                            let cApi = Object.assign({}, config.defaults, pa.defaults || {}, toplevel, api);
                            let filename = fnTemplate.render(cApi, config.partials);
                            if (verbose)
                                console.log('Rendering ' + filename + ' (dynamic:' + pa.input + ')');
                            ff.createFile(path.join(outputDir, subDir, filename), template.render(cApi, config.partials), 'utf8');
                        }
                    }
                }
                if (config.perModel) {
                    let cModels = clone_1.deepClone(model.models);
                    for (let pm of config.perModel) {
                        let fnTemplate = Hogan.compile(pm.output);
                        let template = Hogan.compile(ff.readFileSync(tpl(configName, pm.input), 'utf8'));
                        for (let model of cModels) {
                            outer.models = [];
                            let effModel = Object.assign({}, model, pm.defaults || {});
                            outer.models.push(effModel);
                            let filename = fnTemplate.render(outer, config.partials);
                            if (verbose)
                                console.log('Rendering ' + filename + ' (dynamic:' + pm.input + ')');
                            ff.createFile(path.join(outputDir, subDir, filename), template.render(outer, config.partials), 'utf8');
                        }
                    }
                }
                if (config.perOperation) { // now may not be necessary
                    for (let po of config.perOperation) {
                        for (let api of outer.apiInfo.apis) {
                            let cOperations = clone_1.deepClone(api.operations);
                            let fnTemplate = Hogan.compile(po.output);
                            let template = Hogan.compile(ff.readFileSync(tpl(configName, po.input), 'utf8'));
                            for (let operation of cOperations) {
                                model.operations = [];
                                model.operations.push(operation);
                                let filename = fnTemplate.render(outer, config.partials);
                                if (verbose)
                                    console.log('Rendering ' + filename + ' (dynamic:' + po.input + ')');
                                ff.createFile(path.join(outputDir, subDir, filename), template.render(outer, config.partials), 'utf8');
                            }
                        }
                    }
                }
                if (callback)
                    callback(null, true);
            });
        });
    });
}
module.exports = {
    fileFunctions: ff,
    main: main
};
