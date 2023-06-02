import 'package:flutter/material.dart';
import 'package:flutter_application/layouts/screens_layout.dart';
import 'package:flutter_application/pages/login/help_page.dart';
import 'package:flutter_application/utils/helpers/app_layout.dart';
import 'package:flutter_application/utils/styles/colors.dart';
import 'package:flutter_application/utils/styles/typography.dart';
import 'package:flutter_application/widgets/app_layout/app_screen_title.dart';
import 'package:flutter_application/widgets/bottom_bar/bottom_bar.dart';
import 'package:flutter_application/widgets/buttons/icon_button.dart';
import 'package:gap/gap.dart';

class SelectAccount extends StatelessWidget {
  const SelectAccount({super.key});

  @override
  Widget build(BuildContext context) {
    final dynamic size = AppLayout.getSize(context);

    return ScreensLayout(
      column: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          AppScreenTitle(
            text: "Select Account",
            leftButton: IconButton(
              onPressed: () => Navigator.pop(context),
              icon: const Icon(
                Icons.arrow_back_ios,
                size: 20,
                color: Colors.white,
              ),
            ),
            rightButton: IconButton(
              onPressed: () => Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => const HelpPage(),
                ),
              ),
              icon: const Icon(
                Icons.help_outline,
                size: 20,
                color: Colors.white,
              ),
            ),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 30),
            decoration: BoxDecoration(
              color: AppColors.whiteColor,
              borderRadius: const BorderRadius.all(Radius.circular(20)),
            ),
            width: size.width * 0.9,
            height: 380,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "Please select the account you wish to access.",
                  style: AppTypography.largeTitle.copyWith(
                      color: AppColors.smokyBlackColor,
                      fontWeight: FontWeight.w800),
                ),
                Column(
                  children: [
                    IconButtonWidget(
                      placeholder: "My current account",
                      icon: const Icon(Icons.person_sharp),
                      bgColor: AppColors.blueColor,
                      function: () => Navigator.push(context,
                          MaterialPageRoute(builder: (_) => const BottomBar())),
                      buttonWidth: size.width,
                    ),
                    const Gap(20),
                    IconButtonWidget(
                      placeholder: "My company account",
                      icon: const Icon(Icons.business_outlined),
                      bgColor: AppColors.blueColor,
                      function: () => Navigator.push(context,
                          MaterialPageRoute(builder: (_) => const BottomBar())),
                      buttonWidth: size.width,
                    ),
                  ],
                )
              ],
            ),
          ),
        ],
      ),
    );
  }
}
