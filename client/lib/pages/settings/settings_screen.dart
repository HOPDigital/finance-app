import 'package:flutter/material.dart';

// Layouts & Widgets
import 'package:flutter_application/layouts/screens_layout.dart';
import 'package:flutter_application/widgets/app_layout/app_screen_title.dart';

// Utils & Dependecies
import 'package:flutter_application/utils/helpers/app_layout.dart';
import 'package:flutter_application/utils/styles/colors.dart';
import 'package:gap/gap.dart';

class SettingsScreen extends StatelessWidget {
  const SettingsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final dynamic size = AppLayout.getSize(context);

    return ScreensLayout(
      widgetBackgroundColor: AppColors.whiteColor,
      column: Column(
        children: [
          AppScreenTitle(
            text: "Settings",
            textColor: Colors.black,
            leftButton: IconButton(
              onPressed: () => Navigator.pop(context),
              icon: const Icon(
                Icons.arrow_back_ios,
                color: Colors.black,
              ),
            ),
          ),
          const Gap(20),

        ],
      ),
    );
  }
}
