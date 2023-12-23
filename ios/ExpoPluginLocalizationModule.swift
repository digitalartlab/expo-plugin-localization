import ExpoModulesCore

public class ExpoNativeConfigurationModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoPluginLocalization")

    Function("getLocales") {
     return Bundle.main.object(forInfoDictionaryKey: "LOCALES_SUPPORTED") as? String
    }
  }
}
