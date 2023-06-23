import 'package:flutter/material.dart';

// Controller
import 'package:flutter_application/controller/language_controller.dart';
import 'package:flutter_application/pages/boarding/boarding_screen.dart';

// Utils & Dependencies
import 'package:flutter_application/utils/helpers/app_layout.dart';
import 'package:flutter_application/utils/styles/colors.dart';
import 'package:flutter_application/utils/styles/typography.dart';
import 'package:flutter_application/widgets/buttons/icon_button.dart';
import 'package:flutter_application/widgets/select_language_widget.dart';
import 'package:gap/gap.dart';
import 'package:get/get.dart';

class SelectLanguage extends StatefulWidget {
  const SelectLanguage({super.key});

  @override
  State<SelectLanguage> createState() => _SelectLanguageState();
}

class _SelectLanguageState extends State<SelectLanguage> {
  @override
  Widget build(BuildContext context) {
    final dynamic size = AppLayout.getSize(context);

    return Scaffold(
      backgroundColor: AppColors.blueColor,
      body: SafeArea(
        child: GetBuilder<LocalizationController>(
            builder: (localizationController) {
          return Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Expanded(
                child: Center(
                  child: Scrollbar(
                    child: SingleChildScrollView(
                      physics: const BouncingScrollPhysics(),
                      padding: const EdgeInsets.all(10),
                      child: Center(
                        child: SizedBox(
                          width: size.width,
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            mainAxisAlignment: MainAxisAlignment.center,
                            crossAxisAlignment: CrossAxisAlignment.center,
                            children: <Widget>[
                              Text(
                                "select_language".tr,
                                style: AppTypography.largeTitle,
                              ),
                              const Gap(20),
                              GridView.builder(
                                gridDelegate:
                                    const SliverGridDelegateWithFixedCrossAxisCount(
                                  crossAxisCount: 2,
                                ),
                                itemCount: 4,
                                physics: const NeverScrollableScrollPhysics(),
                                shrinkWrap: true,
                                itemBuilder: (context, index) =>
                                    SelectLanguageWidget(
                                  languageModel:
                                      localizationController.languages[index],
                                  localizationController:
                                      localizationController,
                                  index: index,
                                ),
                              ),
                              const Gap(15),
                              IconButtonWidget(
                                placeholder: "confirm_action".tr,
                                icon: Icon(
                                  Icons.arrow_circle_right_rounded,
                                  color: AppColors.whiteColor,
                                ),
                                bgColor: Colors.green,
                                function: () => Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                    builder: (_) => const OnBoardingScreen(),
                                  ),
                                ),
                                buttonWidth: size.width * 0.865,
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ],
          );
        }),
      ),
    );
  }
}
