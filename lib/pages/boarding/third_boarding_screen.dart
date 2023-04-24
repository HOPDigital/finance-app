import 'package:flutter/material.dart';
import 'package:flutter_application/pages/boarding/second_boarding_screen.dart';

// Utils
import 'package:flutter_application/utils/helpers/app_layout.dart';
import 'package:flutter_application/utils/styles/colors.dart';

// Layouts
import 'package:flutter_application/layouts/boarding_layout.dart';
import 'package:gap/gap.dart';

// Widgets
import '../../widgets/app_large_text.dart';
import '../../widgets/app_screen_title.dart';
import 'package:flutter_application/widgets/buttons/icon_button.dart';

class ThirdBoardingScreen extends StatelessWidget {
  const ThirdBoardingScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final dynamic size = AppLayout.getSize(context);

    return BoardingLayout(
      column: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          AppScreenTitle(
            text: 'What\'s new',
            leftButton: IconButton(
              onPressed: () => {},
              icon: const Icon(
                Icons.arrow_back_ios,
                size: 20,
                color: Colors.white,
              ),
            ),
          ),
          Container(
            height: 240,
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: Column(
              children: [
                const AppLargeText(text: 'Personalize your cards'),
                const Gap(20),
                IconButtonWidget(
                    placeholder: "Start",
                    icon: const Icon(
                      Icons.arrow_circle_right_rounded,
                      color: Colors.white,
                    ),
                    bgColor: AppColors.bitterSweetColor,
                    function: () => {},
                    buttonWidth: size.width * 0.9)
              ],
            ),
          ),
        ],
      ),
    );
  }
}
