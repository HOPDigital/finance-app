import 'package:flutter/material.dart';

// Layout & Widgets
import 'package:flutter_application/layouts/screens_layout.dart';
import 'package:flutter_application/widgets/app_layout/app_screen_title.dart';

// Utils & Dependencies
import 'package:flutter_application/utils/helpers/app_layout.dart';
import 'package:flutter_application/utils/styles/colors.dart';
import 'package:gap/gap.dart';

class ProfileScreen extends StatefulWidget {
  const ProfileScreen({super.key});

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  @override
  Widget build(BuildContext context) {
    final dynamic size = AppLayout.getSize(context);

    return ScreensLayout(
      widgetBackgroundColor: AppColors.whiteColor,
      column: Column(
        children: [
          AppScreenTitle(
            text: "Profile",
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