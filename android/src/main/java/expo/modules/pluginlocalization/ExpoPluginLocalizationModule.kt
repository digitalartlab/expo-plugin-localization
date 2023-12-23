package expo.modules.pluginlocalization

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import android.content.pm.PackageManager

class ExpoPluginLocalizationModule() : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoPluginLocalization")

    Function("getLocales") {
      val applicationInfo = appContext?.reactContext?.packageManager?.getApplicationInfo(appContext?.reactContext?.packageName.toString(), PackageManager.GET_META_DATA)

      return@Function applicationInfo?.metaData?.getString("LOCALES_SUPPORTED")
    }
  }
}
