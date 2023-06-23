import 'dart:ui';

import 'package:get/get.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../model/language_model.dart';
import '../utils/helpers/language_constants.dart';

class LocalizationController extends GetxController implements GetxService {
  LocalizationController({required this.sharedPreferences}) {
    loadCurrentLanguage();
  }

  final SharedPreferences sharedPreferences;

  Locale _locale = Locale(
    LanguageConstants.languages[0].languageCode,
    LanguageConstants.languages[0].countryCode,
  );

  Locale get locale => _locale;

  int _selectedIndex = 0;

  int get selectedIndex => _selectedIndex;

  List<LanguageModel> _languages = [];

  List<LanguageModel> get languages => _languages;

  void loadCurrentLanguage() async {
    _locale = Locale(
      sharedPreferences.getString(LanguageConstants.LANGUAGE_CODE) ??
          LanguageConstants.languages[0].languageCode,
      sharedPreferences.getString(LanguageConstants.COUNTRY_CODE) ??
          LanguageConstants.languages[0].countryCode,
    );

    for(int i = 0; i < LanguageConstants.languages.length; i++) {
      if(LanguageConstants.languages[i].languageCode == _locale.languageCode) {
        _selectedIndex = i;
        break;
      }
    }

    _languages = [];
    _languages.addAll(LanguageConstants.languages);
    update();
  }

  void setLanguage(Locale locale) {
    Get.updateLocale(locale);
    _locale = locale;
    saveLanguage(_locale);
    update();
  }

  void setSelectIndex(int index) {
    _selectedIndex = index;
    update();
  }

  void saveLanguage(Locale locale) async {
    sharedPreferences.setString(LanguageConstants.LANGUAGE_CODE, locale.languageCode);
    sharedPreferences.setString(LanguageConstants.COUNTRY_CODE, locale.countryCode!);
  }
}
