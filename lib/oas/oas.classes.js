"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is the root document object for the API specification. It combines what previously was the Resource Listing and API Declaration (version 1.2 and earlier) together into one document.
 */
class OasDoc {
}
exports.OasDoc = OasDoc;
/**
 * The object provides metadata about the API. The metadata can be used by the clients if needed, and can be presented in editing or documentation generation tools for convenience.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "Info".
 */
class Info {
}
exports.Info = Info;
/**
 * Contact information for the exposed API.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "Contact".
 */
class Contact {
}
exports.Contact = Contact;
/**
 * License information for the exposed API.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "License".
 */
class License {
}
exports.License = License;
/**
 * Allows referencing an external resource for extended documentation.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "ExternalDocumentation".
 */
class ExternalDocumentation {
}
exports.ExternalDocumentation = ExternalDocumentation;
/**
 * An object representing a Server.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "Server".
 */
class Server {
}
exports.Server = Server;
/**
 * An object representing a Server Variable for server URL template substitution.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "ServerVariable".
 */
class ServerVariable {
}
exports.ServerVariable = ServerVariable;
/**
 * Lists the required security schemes to execute this operation. The name used for each property MUST correspond to a security scheme declared in the Security Schemes under the Components Object.  Security Requirement Objects that contain multiple schemes require that all schemes MUST be satisfied for a request to be authorized. This enables support for scenarios where there multiple query parameters or HTTP headers are required to convey security information.  When a list of Security Requirement Objects is defined on the Open API object or Operation Object, only one of Security Requirement Objects in the list needs to be satisfied to authorize.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "SecurityRequirement".
 */
class SecurityRequirement {
}
exports.SecurityRequirement = SecurityRequirement;
/**
 * Allows adding meta data to a single tag that is used by the Operation Object. It is not mandatory to have a Tag Object per tag used there.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "Tag".
 */
class Tag {
}
exports.Tag = Tag;
/**
 * Holds the relative paths to the individual endpoints and their operations. The path is appended to the URL from the `Server Object` in order to construct the full URL.  The Paths MAY be empty, due to ACL constraints.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "Paths".
 */
// tslint:disable-next-line:no-empty-interface
class Paths {
}
exports.Paths = Paths;
/**
 * Describes the operations available on a single path. A Path Item MAY be empty, due to ACL constraints. The path itself is still exposed to the documentation viewer but they will not know which operations and parameters are available.
 *
 * This interface was referenced by `Paths`'s JSON-Schema definition
 * via the `patternProperty` "^\/".
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "PathItem".
 */
class PathItem {
}
exports.PathItem = PathItem;
/**
 * Describes a single API operation on a path.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "Operation".
 */
class Operation {
}
exports.Operation = Operation;
/**
 * Describes a single operation parameter.  A unique parameter is defined by a combination of a name and location.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "ParameterWithSchemaWithExampleInPath".
 */
class ParameterWithSchemaWithExampleInPath {
}
exports.ParameterWithSchemaWithExampleInPath = ParameterWithSchemaWithExampleInPath;
/**
 * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives and arrays. This object is an extended subset of the JSON Schema Specification Wright Draft 00.  Further information about the properties can be found in JSON Schema Core and JSON Schema Validation. Unless stated otherwise, the property definitions follow the JSON Schema specification as referenced here.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "Schema".
 */
class Schema {
}
exports.Schema = Schema;
/**
 * A simple object to allow referencing other components in the specification, internally and externally.  The Reference Object is defined by JSON Reference and follows the same structure, behavior and rules.   For this specification, reference resolution is done as defined by the JSON Reference specification and not by the JSON Schema specification.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "Reference".
 */
class Reference {
}
exports.Reference = Reference;
/**
 * When request bodies or response payloads may be one of a number of different schemas, a `discriminator` object can be used to aid in serialization, deserialization, and validation.  The discriminator is a specific object in a schema which is used to inform the consumer of the specification of an alternative schema based on the value associated with it.  Note, when using the discriminator, _inline_ schemas will not be considered when using the discriminator.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "Discriminator".
 */
class Discriminator {
}
exports.Discriminator = Discriminator;
/**
 * A metadata object that allows for more fine-tuned XML model definitions.  When using arrays, XML element names are *not* inferred (for singular/plural forms) and the `name` property SHOULD be used to add that information. See examples for expected behavior.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "XML".
 */
class Xml {
}
exports.Xml = Xml;
/**
 * Describes a single operation parameter.  A unique parameter is defined by a combination of a name and location.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "ParameterWithSchemaWithExampleInQuery".
 */
class ParameterWithSchemaWithExampleInQuery {
}
exports.ParameterWithSchemaWithExampleInQuery = ParameterWithSchemaWithExampleInQuery;
/**
 * Describes a single operation parameter.  A unique parameter is defined by a combination of a name and location.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "ParameterWithSchemaWithExampleInHeader".
 */
class ParameterWithSchemaWithExampleInHeader {
}
exports.ParameterWithSchemaWithExampleInHeader = ParameterWithSchemaWithExampleInHeader;
/**
 * Describes a single operation parameter.  A unique parameter is defined by a combination of a name and location.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "ParameterWithSchemaWithExampleInCookie".
 */
class ParameterWithSchemaWithExampleInCookie {
}
exports.ParameterWithSchemaWithExampleInCookie = ParameterWithSchemaWithExampleInCookie;
/**
 * Describes a single operation parameter.  A unique parameter is defined by a combination of a name and location.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "ParameterWithSchemaWithExamplesInPath".
 */
class ParameterWithSchemaWithExamplesInPath {
}
exports.ParameterWithSchemaWithExamplesInPath = ParameterWithSchemaWithExamplesInPath;
/**
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "Example".
 */
class Example {
}
exports.Example = Example;
/**
 * Describes a single operation parameter.  A unique parameter is defined by a combination of a name and location.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "ParameterWithSchemaWithExamplesInQuery".
 */
class ParameterWithSchemaWithExamplesInQuery {
}
exports.ParameterWithSchemaWithExamplesInQuery = ParameterWithSchemaWithExamplesInQuery;
/**
 * Describes a single operation parameter.  A unique parameter is defined by a combination of a name and location.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "ParameterWithSchemaWithExamplesInHeader".
 */
class ParameterWithSchemaWithExamplesInHeader {
}
exports.ParameterWithSchemaWithExamplesInHeader = ParameterWithSchemaWithExamplesInHeader;
/**
 * Describes a single operation parameter.  A unique parameter is defined by a combination of a name and location.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "ParameterWithSchemaWithExamplesInCookie".
 */
class ParameterWithSchemaWithExamplesInCookie {
}
exports.ParameterWithSchemaWithExamplesInCookie = ParameterWithSchemaWithExamplesInCookie;
/**
 * Describes a single operation parameter.  A unique parameter is defined by a combination of a name and location.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "ParameterWithContentInPath".
 */
class ParameterWithContentInPath {
}
exports.ParameterWithContentInPath = ParameterWithContentInPath;
/**
 * Each Media Type Object provides schema and examples for a the media type identified by its key.  Media Type Objects can be used in a Content Object.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "MediaTypeWithExample".
 */
class MediaTypeWithExample {
}
exports.MediaTypeWithExample = MediaTypeWithExample;
/**
 * An object representing multipart region encoding for `requestBody` objects.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "Encoding".
 */
class Encoding {
}
exports.Encoding = Encoding;
/**
 * The Header Object follows the structure of the Parameter Object, with the following changes:  1. `name` MUST NOT be specified, it is given in the Headers Object. 1. `in` MUST NOT be specified, it is implicitly in `header`. 1. All traits that are affected by the location MUST be applicable to a location of `header` (for example, `style`).
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "HeaderWithSchemaWithExample".
 */
class HeaderWithSchemaWithExample {
}
exports.HeaderWithSchemaWithExample = HeaderWithSchemaWithExample;
/**
 * The Header Object follows the structure of the Parameter Object, with the following changes:  1. `name` MUST NOT be specified, it is given in the Headers Object. 1. `in` MUST NOT be specified, it is implicitly in `header`. 1. All traits that are affected by the location MUST be applicable to a location of `header` (for example, `style`).
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "HeaderWithSchemaWithExamples".
 */
class HeaderWithSchemaWithExamples {
}
exports.HeaderWithSchemaWithExamples = HeaderWithSchemaWithExamples;
/**
 * The Header Object follows the structure of the Parameter Object, with the following changes:  1. `name` MUST NOT be specified, it is given in the Headers Object. 1. `in` MUST NOT be specified, it is implicitly in `header`. 1. All traits that are affected by the location MUST be applicable to a location of `header` (for example, `style`).
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "HeaderWithContent".
 */
class HeaderWithContent {
}
exports.HeaderWithContent = HeaderWithContent;
/**
 * Each Media Type Object provides schema and examples for a the media type identified by its key.  Media Type Objects can be used in a Content Object.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "MediaTypeWithExamples".
 */
class MediaTypeWithExamples {
}
exports.MediaTypeWithExamples = MediaTypeWithExamples;
/**
 * Describes a single operation parameter.  A unique parameter is defined by a combination of a name and location.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "ParameterWithContentNotInPath".
 */
class ParameterWithContentNotInPath {
}
exports.ParameterWithContentNotInPath = ParameterWithContentNotInPath;
/**
 * Describes a single request body.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "RequestBody".
 */
class RequestBody {
}
exports.RequestBody = RequestBody;
/**
 * A container for the expected responses of an operation. The container maps a HTTP response code to the expected response.  It is not expected for the documentation to necessarily cover all possible HTTP response codes, since they may not be known in advance. However, it is expected for the documentation to cover a successful operation response and any known errors.  The `default` MAY be used as a default response object for all HTTP codes  that are not covered individually by the specification.  The `Responses Object` MUST contain at least one response code, and it  SHOULD be the response for a successful operation call.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "Responses".
 */
class Responses {
}
exports.Responses = Responses;
/**
 * Describes a single response from an API Operation, including design-time, static  `links` to operations based on the response.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "Response".
 */
class Response {
}
exports.Response = Response;
/**
 * The `Link Object` is responsible for defining a possible operation based on a single response.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "LinkWithOperationRef".
 */
class LinkWithOperationRef {
}
exports.LinkWithOperationRef = LinkWithOperationRef;
/**
 * The `Link Object` is responsible for defining a possible operation based on a single response.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "LinkWithOperationId".
 */
class LinkWithOperationId {
}
exports.LinkWithOperationId = LinkWithOperationId;
/**
 * A map of possible out-of band callbacks related to the parent operation. Each value in the map is a Path Item Object that describes a set of requests that may be initiated by the API provider and the expected responses. The key value used to identify the callback object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "Callback".
 */
class Callback {
}
exports.Callback = Callback;
/**
 * Holds a set of reusable objects for different aspects of the OAS. All objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "Components".
 */
class Components {
}
exports.Components = Components;
/**
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "APIKeySecurityScheme".
 */
class ApiKeySecurityScheme {
}
exports.ApiKeySecurityScheme = ApiKeySecurityScheme;
/**
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "NonBearerHTTPSecurityScheme".
 */
class NonBearerHttpSecurityScheme {
}
exports.NonBearerHttpSecurityScheme = NonBearerHttpSecurityScheme;
/**
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "BearerHTTPSecurityScheme".
 */
class BearerHttpSecurityScheme {
}
exports.BearerHttpSecurityScheme = BearerHttpSecurityScheme;
/**
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "OAuth2SecurityScheme".
 */
class OAuth2SecurityScheme {
}
exports.OAuth2SecurityScheme = OAuth2SecurityScheme;
/**
 * Allows configuration of the supported OAuth Flows.
 *
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "OAuthFlows".
 */
class OAuthFlows {
}
exports.OAuthFlows = OAuthFlows;
/**
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "ImplicitOAuthFlow".
 */
class ImplicitOAuthFlow {
}
exports.ImplicitOAuthFlow = ImplicitOAuthFlow;
/**
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "PasswordOAuthFlow".
 */
class PasswordOAuthFlow {
}
exports.PasswordOAuthFlow = PasswordOAuthFlow;
/**
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "ClientCredentialsFlow".
 */
class ClientCredentialsFlow {
}
exports.ClientCredentialsFlow = ClientCredentialsFlow;
/**
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "AuthorizationCodeOAuthFlow".
 */
class AuthorizationCodeOAuthFlow {
}
exports.AuthorizationCodeOAuthFlow = AuthorizationCodeOAuthFlow;
/**
 * This interface was referenced by `OasDoc`'s JSON-Schema
 * via the `definition` "OpenIdConnectSecurityScheme".
 */
class OpenIdConnectSecurityScheme {
}
exports.OpenIdConnectSecurityScheme = OpenIdConnectSecurityScheme;
