import 'package:flutter/material.dart';
import 'package:flutter_application/controller/language_controller.dart';
import 'package:flutter_application/model/language_model.dart';
import 'package:flutter_application/utils/helpers/language_constants.dart';
import 'package:flutter_application/utils/styles/colors.dart';
import 'package:flutter_application/utils/styles/typography.dart';
import 'package:gap/gap.dart';

class SelectLanguageWidget extends StatelessWidget {
  const SelectLanguageWidget(
      {super.key,
      required this.languageModel,
      required this.localizationController,
      required this.index});

  final LanguageModel languageModel;
  final LocalizationController localizationController;
  final int index;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        localizationController.setLanguage(Locale(
          LanguageConstants.languages[index].languageCode,
          LanguageConstants.languages[index].countryCode,
        ));

        localizationController.setSelectIndex(index);
      },
      child: Container(
        decoration: BoxDecoration(
            borderRadius: const BorderRadius.all(Radius.circular(12)),
            border: localizationController.selectedIndex == index
                ? Border.all(color: AppColors.smokyBlackColor, width: 2)
                : null,
            color: AppColors.whiteColor),
        padding: const EdgeInsets.all(10),
        margin: const EdgeInsets.all(18),
        child: Stack(
          children: [
            Center(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  languageModel.countryFlag,
                  const Gap(15),
                  Text(
                    languageModel.languageName,
                    style: AppTypography.textBody.copyWith(
                        color: Colors.black, fontWeight: FontWeight.w600),
                    textAlign: TextAlign.center,
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
