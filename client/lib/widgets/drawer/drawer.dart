import 'package:flutter/material.dart';
import 'package:flutter_application/pages/profile/profile_screen.dart';

// Utils & Dependencies
import 'package:flutter_application/utils/helpers/app_layout.dart';
import 'package:flutter_application/utils/styles/colors.dart';
import 'package:flutter_application/utils/styles/typography.dart';
import 'package:gap/gap.dart';

class DrawerWidget extends StatelessWidget {
  const DrawerWidget({super.key});

  @override
  Widget build(BuildContext context) {
    final dynamic size = AppLayout.getSize(context);

    return Drawer(
      backgroundColor: AppColors.blueColor,
      width: size.width * 0.65,
      child: Padding(
        padding: EdgeInsets.only(
          top: AppLayout.getHeight(40),
          left: AppLayout.getWidth(10),
          right: AppLayout.getWidth(10),
          bottom: AppLayout.getHeight(25),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    // Load profile image instead of Icon
                    //
                    Icon(
                      Icons.person_4_outlined,
                      color: AppColors.whiteColor,
                    ),
                    const Gap(10),
                    Text(
                      "Welcome, Matheus",
                      style: AppTypography.textBody.copyWith(
                        color: AppColors.whiteColor,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ],
                ),
                const Gap(10),
                const Divider(
                  thickness: 0.2,
                  indent: 15.0,
                  endIndent: 15.0,
                  color: Colors.white,
                ),
                const Gap(10),
                TextButton.icon(
                  onPressed: () => {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (_) => const ProfileScreen(),
                      ),
                    ),
                  },
                  icon: Icon(
                    Icons.person_4_outlined,
                    color: AppColors.whiteColor,
                  ),
                  label: Text(
                    "Profile information",
                    style: AppTypography.textBody.copyWith(
                      color: AppColors.whiteColor,
                    ),
                  ),
                ),
              ],
            ),
            TextButton.icon(
              onPressed: () => {},
              icon: Icon(
                Icons.logout_outlined,
                color: AppColors.whiteColor,
              ),
              label: Text(
                "Logout",
                style: AppTypography.textBody.copyWith(
                  color: AppColors.whiteColor,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
