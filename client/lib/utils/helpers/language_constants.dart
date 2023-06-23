import '../../model/language_model.dart';
import 'package:country_flags/country_flags.dart';

class LanguageConstants {
  static const String COUNTRY_CODE = 'country_code';
  static const String LANGUAGE_CODE = 'language_code';

  static List<LanguageModel> languages = [
    LanguageModel(
      countryFlag: CountryFlag.fromCountryCode(
        "br",
        height: 38,
        width: 52,
        borderRadius: 8,
      ),
      languageName: "Português",
      languageCode: "pt-br",
      countryCode: "BRA",
    ),
    LanguageModel(
      countryFlag: CountryFlag.fromLanguageCode(
        "en-US",
        height: 38,
        width: 52,
        borderRadius: 8,
      ),
      languageName: "English (US)",
      languageCode: "en",
      countryCode: "USA",
    ),
    LanguageModel(
      countryFlag: CountryFlag.fromLanguageCode(
        "es",
        height: 38,
        width: 52,
        borderRadius: 8,
      ),
      languageName: "Español",
      languageCode: "es",
      countryCode: "ESP",
    ),
    LanguageModel(
      countryFlag: CountryFlag.fromLanguageCode(
        "de",
        height: 38,
        width: 52,
        borderRadius: 8,
      ),
      languageName: "Deutsch",
      languageCode: "de",
      countryCode: "DEU",
    ),
  ];
}
