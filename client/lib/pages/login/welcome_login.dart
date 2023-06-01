import 'package:flutter/material.dart';

// Widgets & Layouts
import 'package:flutter_application/layouts/boarding_layout.dart';
import 'package:flutter_application/pages/login/help_page.dart';
import 'package:flutter_application/pages/login/select_account.dart';
import 'package:flutter_application/widgets/app_layout/app_screen_title.dart';

// Utils
import 'package:flutter_application/utils/helpers/app_layout.dart';
import 'package:flutter_application/utils/styles/typography.dart';
import 'package:flutter_application/utils/styles/colors.dart';
import 'package:gap/gap.dart';

class WelcomeLogin extends StatelessWidget {
  const WelcomeLogin({super.key});

  @override
  Widget build(BuildContext context) {
    final dynamic size = AppLayout.getSize(context);

    return Scaffold(
      body: BoardingLayout(
        column: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            AppScreenTitle(
              text: 'Welcome',
              leftButton: IconButton(
                onPressed: () => {Navigator.pop(context)},
                icon: const Icon(
                  Icons.arrow_back_ios,
                  size: 20,
                  color: Colors.white,
                ),
              ),
              rightButton: IconButton(
                onPressed: () => {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => const HelpPage(),
                    ),
                  ),
                },
                icon: const Icon(
                  Icons.help_outline,
                  size: 20,
                  color: Colors.white,
                ),
              ),
            ),
            /* Pin Section */
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 30),
              decoration: BoxDecoration(
                borderRadius: const BorderRadius.all(Radius.circular(20)),
                color: AppColors.whiteColor,
              ),
              height: 300,
              width: size.width * 0.9,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  SizedBox(
                    child: Column(
                      children: [
                        Text(
                          "Enter PIN",
                          style: AppTypography.titleOne.copyWith(
                            color: AppColors.smokyBlackColor,
                            fontWeight: FontWeight.w800,
                          ),
                        ),
                        const Gap(10),
                        Text(
                          "Welcome to the future of banking.\nPlease enter your PIN to login.",
                          style: AppTypography.textBody.copyWith(
                            color: AppColors.smokyBlackColor,
                          ),
                          textAlign: TextAlign.center,
                        ),
                      ],
                    ),
                  ),
                  SizedBox(
                    child: Column(
                      children: [
                        Text(
                          "Enter your PIN:",
                          style: AppTypography.subhead.copyWith(
                              color: AppColors.smokyBlackColor,
                              fontWeight: FontWeight.bold),
                        ),

                        TextButton(
                          onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const SelectAccount())),
                          child: Text(
                            "I forgot my PIN",
                            style: AppTypography.footnote.copyWith(
                              color: AppColors.smokyBlackColor,
                              decoration: TextDecoration.underline,
                            ),
                          ),
                        ),
                      ],
                    ),
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
