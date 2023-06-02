import 'package:flutter/material.dart';

// Widgets & Layout
import 'package:flutter_application/layouts/screens_layout.dart';
import 'package:flutter_application/utils/helpers/app_layout.dart';
import 'package:flutter_application/utils/styles/typography.dart';
import 'package:flutter_application/widgets/app_layout/app_screen_title.dart';

// Utils
import 'package:flutter_application/utils/styles/colors.dart';

class HelpPage extends StatelessWidget {
  const HelpPage({super.key});

  @override
  Widget build(BuildContext context) {
    final dynamic size = AppLayout.getSize(context);

    return ScreensLayout(
      column: Column(
        children: [
          AppScreenTitle(
            text: "How to login",
            leftButton: IconButton(
              onPressed: () => Navigator.pop(context),
              icon: const Icon(
                Icons.arrow_back_ios,
                size: 20,
                color: Colors.white,
              ),
            ),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 25, vertical: 25),
            margin: const EdgeInsets.only(top: 30),
            decoration: BoxDecoration(
              color: AppColors.whiteColor,
              borderRadius: const BorderRadius.all(Radius.circular(20)),
            ),
            width: size.width * 0.9,
            height: size.height * 0.8,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "TBC",
                  style: AppTypography.largeTitle
                      .copyWith(color: AppColors.smokyBlackColor),
                ),
                Text(
                  "Content",
                  style: AppTypography.textBody
                      .copyWith(color: AppColors.smokyBlackColor),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
