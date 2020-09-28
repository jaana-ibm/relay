(function() {var implementors = {};
implementors["relay_common"] = [{"text":"impl JsonSchema for <a class=\"enum\" href=\"relay_common/enum.EventType.html\" title=\"enum relay_common::EventType\">EventType</a>","synthetic":false,"types":["relay_common::constants::EventType"]},{"text":"impl JsonSchema for <a class=\"enum\" href=\"relay_common/enum.SpanStatus.html\" title=\"enum relay_common::SpanStatus\">SpanStatus</a>","synthetic":false,"types":["relay_common::constants::SpanStatus"]}];
implementors["relay_general"] = [{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Breadcrumb.html\" title=\"struct relay_general::protocol::Breadcrumb\">Breadcrumb</a>","synthetic":false,"types":["relay_general::protocol::breadcrumb::Breadcrumb"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.ClientSdkPackage.html\" title=\"struct relay_general::protocol::ClientSdkPackage\">ClientSdkPackage</a>","synthetic":false,"types":["relay_general::protocol::clientsdk::ClientSdkPackage"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.ClientSdkInfo.html\" title=\"struct relay_general::protocol::ClientSdkInfo\">ClientSdkInfo</a>","synthetic":false,"types":["relay_general::protocol::clientsdk::ClientSdkInfo"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.DeviceContext.html\" title=\"struct relay_general::protocol::DeviceContext\">DeviceContext</a>","synthetic":false,"types":["relay_general::protocol::contexts::DeviceContext"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.OsContext.html\" title=\"struct relay_general::protocol::OsContext\">OsContext</a>","synthetic":false,"types":["relay_general::protocol::contexts::OsContext"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.RuntimeContext.html\" title=\"struct relay_general::protocol::RuntimeContext\">RuntimeContext</a>","synthetic":false,"types":["relay_general::protocol::contexts::RuntimeContext"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.AppContext.html\" title=\"struct relay_general::protocol::AppContext\">AppContext</a>","synthetic":false,"types":["relay_general::protocol::contexts::AppContext"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.BrowserContext.html\" title=\"struct relay_general::protocol::BrowserContext\">BrowserContext</a>","synthetic":false,"types":["relay_general::protocol::contexts::BrowserContext"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.GpuContext.html\" title=\"struct relay_general::protocol::GpuContext\">GpuContext</a>","synthetic":false,"types":["relay_general::protocol::contexts::GpuContext"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.TraceId.html\" title=\"struct relay_general::protocol::TraceId\">TraceId</a>","synthetic":false,"types":["relay_general::protocol::contexts::TraceId"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.SpanId.html\" title=\"struct relay_general::protocol::SpanId\">SpanId</a>","synthetic":false,"types":["relay_general::protocol::contexts::SpanId"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.TraceContext.html\" title=\"struct relay_general::protocol::TraceContext\">TraceContext</a>","synthetic":false,"types":["relay_general::protocol::contexts::TraceContext"]},{"text":"impl JsonSchema for <a class=\"enum\" href=\"relay_general/protocol/enum.Context.html\" title=\"enum relay_general::protocol::Context\">Context</a>","synthetic":false,"types":["relay_general::protocol::contexts::Context"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.ContextInner.html\" title=\"struct relay_general::protocol::ContextInner\">ContextInner</a>","synthetic":false,"types":["relay_general::protocol::contexts::ContextInner"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Contexts.html\" title=\"struct relay_general::protocol::Contexts\">Contexts</a>","synthetic":false,"types":["relay_general::protocol::contexts::Contexts"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.NativeImagePath.html\" title=\"struct relay_general::protocol::NativeImagePath\">NativeImagePath</a>","synthetic":false,"types":["relay_general::protocol::debugmeta::NativeImagePath"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.SystemSdkInfo.html\" title=\"struct relay_general::protocol::SystemSdkInfo\">SystemSdkInfo</a>","synthetic":false,"types":["relay_general::protocol::debugmeta::SystemSdkInfo"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.AppleDebugImage.html\" title=\"struct relay_general::protocol::AppleDebugImage\">AppleDebugImage</a>","synthetic":false,"types":["relay_general::protocol::debugmeta::AppleDebugImage"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.CodeId.html\" title=\"struct relay_general::protocol::CodeId\">CodeId</a>","synthetic":false,"types":["relay_general::protocol::debugmeta::CodeId"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.DebugId.html\" title=\"struct relay_general::protocol::DebugId\">DebugId</a>","synthetic":false,"types":["relay_general::protocol::debugmeta::DebugId"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.NativeDebugImage.html\" title=\"struct relay_general::protocol::NativeDebugImage\">NativeDebugImage</a>","synthetic":false,"types":["relay_general::protocol::debugmeta::NativeDebugImage"]},{"text":"impl JsonSchema for <a class=\"enum\" href=\"relay_general/protocol/enum.DebugImage.html\" title=\"enum relay_general::protocol::DebugImage\">DebugImage</a>","synthetic":false,"types":["relay_general::protocol::debugmeta::DebugImage"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.DebugMeta.html\" title=\"struct relay_general::protocol::DebugMeta\">DebugMeta</a>","synthetic":false,"types":["relay_general::protocol::debugmeta::DebugMeta"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.EventId.html\" title=\"struct relay_general::protocol::EventId\">EventId</a>","synthetic":false,"types":["relay_general::protocol::event::EventId"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.ExtraValue.html\" title=\"struct relay_general::protocol::ExtraValue\">ExtraValue</a>","synthetic":false,"types":["relay_general::protocol::event::ExtraValue"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.EventProcessingError.html\" title=\"struct relay_general::protocol::EventProcessingError\">EventProcessingError</a>","synthetic":false,"types":["relay_general::protocol::event::EventProcessingError"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Event.html\" title=\"struct relay_general::protocol::Event\">Event</a>","synthetic":false,"types":["relay_general::protocol::event::Event"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Exception.html\" title=\"struct relay_general::protocol::Exception\">Exception</a>","synthetic":false,"types":["relay_general::protocol::exception::Exception"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Fingerprint.html\" title=\"struct relay_general::protocol::Fingerprint\">Fingerprint</a>","synthetic":false,"types":["relay_general::protocol::fingerprint::Fingerprint"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.LogEntry.html\" title=\"struct relay_general::protocol::LogEntry\">LogEntry</a>","synthetic":false,"types":["relay_general::protocol::logentry::LogEntry"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Message.html\" title=\"struct relay_general::protocol::Message\">Message</a>","synthetic":false,"types":["relay_general::protocol::logentry::Message"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Measurements.html\" title=\"struct relay_general::protocol::Measurements\">Measurements</a>","synthetic":false,"types":["relay_general::protocol::measurements::Measurements"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.CError.html\" title=\"struct relay_general::protocol::CError\">CError</a>","synthetic":false,"types":["relay_general::protocol::mechanism::CError"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.MachException.html\" title=\"struct relay_general::protocol::MachException\">MachException</a>","synthetic":false,"types":["relay_general::protocol::mechanism::MachException"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.PosixSignal.html\" title=\"struct relay_general::protocol::PosixSignal\">PosixSignal</a>","synthetic":false,"types":["relay_general::protocol::mechanism::PosixSignal"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.MechanismMeta.html\" title=\"struct relay_general::protocol::MechanismMeta\">MechanismMeta</a>","synthetic":false,"types":["relay_general::protocol::mechanism::MechanismMeta"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Mechanism.html\" title=\"struct relay_general::protocol::Mechanism\">Mechanism</a>","synthetic":false,"types":["relay_general::protocol::mechanism::Mechanism"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Metrics.html\" title=\"struct relay_general::protocol::Metrics\">Metrics</a>","synthetic":false,"types":["relay_general::protocol::metrics::Metrics"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Cookies.html\" title=\"struct relay_general::protocol::Cookies\">Cookies</a>","synthetic":false,"types":["relay_general::protocol::request::Cookies"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.HeaderName.html\" title=\"struct relay_general::protocol::HeaderName\">HeaderName</a>","synthetic":false,"types":["relay_general::protocol::request::HeaderName"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.HeaderValue.html\" title=\"struct relay_general::protocol::HeaderValue\">HeaderValue</a>","synthetic":false,"types":["relay_general::protocol::request::HeaderValue"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Headers.html\" title=\"struct relay_general::protocol::Headers\">Headers</a>","synthetic":false,"types":["relay_general::protocol::request::Headers"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Query.html\" title=\"struct relay_general::protocol::Query\">Query</a>","synthetic":false,"types":["relay_general::protocol::request::Query"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Request.html\" title=\"struct relay_general::protocol::Request\">Request</a>","synthetic":false,"types":["relay_general::protocol::request::Request"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Span.html\" title=\"struct relay_general::protocol::Span\">Span</a>","synthetic":false,"types":["relay_general::protocol::span::Span"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Frame.html\" title=\"struct relay_general::protocol::Frame\">Frame</a>","synthetic":false,"types":["relay_general::protocol::stacktrace::Frame"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.FrameVars.html\" title=\"struct relay_general::protocol::FrameVars\">FrameVars</a>","synthetic":false,"types":["relay_general::protocol::stacktrace::FrameVars"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.FrameData.html\" title=\"struct relay_general::protocol::FrameData\">FrameData</a>","synthetic":false,"types":["relay_general::protocol::stacktrace::FrameData"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.RawStacktrace.html\" title=\"struct relay_general::protocol::RawStacktrace\">RawStacktrace</a>","synthetic":false,"types":["relay_general::protocol::stacktrace::RawStacktrace"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Stacktrace.html\" title=\"struct relay_general::protocol::Stacktrace\">Stacktrace</a>","synthetic":false,"types":["relay_general::protocol::stacktrace::Stacktrace"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.TagEntry.html\" title=\"struct relay_general::protocol::TagEntry\">TagEntry</a>","synthetic":false,"types":["relay_general::protocol::tags::TagEntry"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Tags.html\" title=\"struct relay_general::protocol::Tags\">Tags</a>","synthetic":false,"types":["relay_general::protocol::tags::Tags"]},{"text":"impl JsonSchema for <a class=\"enum\" href=\"relay_general/protocol/enum.ThreadId.html\" title=\"enum relay_general::protocol::ThreadId\">ThreadId</a>","synthetic":false,"types":["relay_general::protocol::thread::ThreadId"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Thread.html\" title=\"struct relay_general::protocol::Thread\">Thread</a>","synthetic":false,"types":["relay_general::protocol::thread::Thread"]},{"text":"impl&lt;T&gt; JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Values.html\" title=\"struct relay_general::protocol::Values\">Values</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: JsonSchema,&nbsp;</span>","synthetic":false,"types":["relay_general::protocol::types::Values"]},{"text":"impl&lt;T&gt; JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.PairList.html\" title=\"struct relay_general::protocol::PairList\">PairList</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: JsonSchema + <a class=\"trait\" href=\"relay_general/protocol/trait.AsPair.html\" title=\"trait relay_general::protocol::AsPair\">AsPair</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as <a class=\"trait\" href=\"relay_general/protocol/trait.AsPair.html\" title=\"trait relay_general::protocol::AsPair\">AsPair</a>&gt;::<a class=\"type\" href=\"relay_general/protocol/trait.AsPair.html#associatedtype.Value\" title=\"type relay_general::protocol::AsPair::Value\">Value</a>: JsonSchema,&nbsp;</span>","synthetic":false,"types":["relay_general::protocol::types::PairList"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.RegVal.html\" title=\"struct relay_general::protocol::RegVal\">RegVal</a>","synthetic":false,"types":["relay_general::protocol::types::RegVal"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Addr.html\" title=\"struct relay_general::protocol::Addr\">Addr</a>","synthetic":false,"types":["relay_general::protocol::types::Addr"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.IpAddr.html\" title=\"struct relay_general::protocol::IpAddr\">IpAddr</a>","synthetic":false,"types":["relay_general::protocol::types::IpAddr"]},{"text":"impl JsonSchema for <a class=\"enum\" href=\"relay_general/protocol/enum.Level.html\" title=\"enum relay_general::protocol::Level\">Level</a>","synthetic":false,"types":["relay_general::protocol::types::Level"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.LenientString.html\" title=\"struct relay_general::protocol::LenientString\">LenientString</a>","synthetic":false,"types":["relay_general::protocol::types::LenientString"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.JsonLenientString.html\" title=\"struct relay_general::protocol::JsonLenientString\">JsonLenientString</a>","synthetic":false,"types":["relay_general::protocol::types::JsonLenientString"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Timestamp.html\" title=\"struct relay_general::protocol::Timestamp\">Timestamp</a>","synthetic":false,"types":["relay_general::protocol::types::Timestamp"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.Geo.html\" title=\"struct relay_general::protocol::Geo\">Geo</a>","synthetic":false,"types":["relay_general::protocol::user::Geo"]},{"text":"impl JsonSchema for <a class=\"struct\" href=\"relay_general/protocol/struct.User.html\" title=\"struct relay_general::protocol::User\">User</a>","synthetic":false,"types":["relay_general::protocol::user::User"]},{"text":"impl&lt;T&gt; JsonSchema for <a class=\"struct\" href=\"relay_general/types/struct.Annotated.html\" title=\"struct relay_general::types::Annotated\">Annotated</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: JsonSchema,&nbsp;</span>","synthetic":false,"types":["relay_general::types::annotated::Annotated"]},{"text":"impl JsonSchema for <a class=\"enum\" href=\"relay_general/types/enum.Value.html\" title=\"enum relay_general::types::Value\">Value</a>","synthetic":false,"types":["relay_general::types::value::Value"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()