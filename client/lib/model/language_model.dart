import 'package:country_flags/country_flags.dart';

class LanguageModel {
  CountryFlag countryFlag;
  String languageName;
  String languageCode;
  String countryCode;

  LanguageModel({
    required this.countryFlag,
    required this.languageName,
    required this.languageCode,
    required this.countryCode
  });
}