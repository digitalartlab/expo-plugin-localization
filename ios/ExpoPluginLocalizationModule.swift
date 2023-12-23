import ExpoModulesCore

public class ExpoPluginLocalizationModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoPluginLocalization")

    Function("getLocales") {
     return Bundle.main.object(forInfoDictionaryKey: "LOCALES_SUPPORTED") as? String
    }
  }
}
