import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_application/controller/language_controller.dart';
import 'package:flutter_application/pages/check_user_account.dart';
import 'package:flutter_application/pages/select_language.dart';
import 'package:flutter_application/utils/helpers/language_constants.dart';
import 'package:flutter_application/utils/helpers/messages.dart';
import 'package:get/get.dart';
import 'utils/helpers/dep.dart' as dep;
import 'package:shared_preferences/shared_preferences.dart';

// Pages
import 'package:flutter_application/pages/splash_intro_screen.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // Set flag after first time the user press "Start" on borading screen
  final prefs = await SharedPreferences.getInstance();
  final showCheckUserAccount = prefs.getBool('showCheckUserAccount') ?? false;

  // Language preference
  Map<String, Map<String, String>> languages = await dep.init();

  // Status and navigation bar overlay
  SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersiveSticky,
      overlays: [SystemUiOverlay.bottom]);
  SystemChrome.setSystemUIOverlayStyle(
    const SystemUiOverlayStyle(statusBarColor: Colors.transparent),
  );

  runApp(
    MainApp(
      showCheckUserAccount: showCheckUserAccount,
      languages: languages,
    ),
  );
}

class MainApp extends StatelessWidget {
  const MainApp(
      {super.key, required this.showCheckUserAccount, required this.languages});

  final bool showCheckUserAccount;
  final Map<String, Map<String, String>> languages;

  @override
  Widget build(BuildContext context) {
    return GetBuilder<LocalizationController>(
        builder: (localizationController) {
      return GetMaterialApp(
          title: "Finance App by Hop Digital",
          debugShowCheckedModeBanner: false,
          theme: ThemeData(
            useMaterial3: true,
          ),
          locale: localizationController.locale,
          translations: Messages(languages: languages),
          fallbackLocale: Locale(LanguageConstants.languages[0].languageCode,
              LanguageConstants.languages[0].countryCode),
          home: showCheckUserAccount
              ? const SplashIntroScreen(screenToBeCalled: CheckUserAccount())
              : const SplashIntroScreen(screenToBeCalled: SelectLanguage()));
    });
  }
}
