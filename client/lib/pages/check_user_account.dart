import 'package:flutter/material.dart';

// Dependecies
import 'package:gap/gap.dart';

// Utils
import 'package:flutter_application/utils/helpers/app_layout.dart';
import 'package:flutter_application/utils/styles/typography.dart';

// Widgets
import 'package:flutter_application/widgets/app_layout/check_user_option.dart';

// Pages & Layout
import 'package:flutter_application/layouts/boarding_layout.dart';
import 'package:flutter_application/pages/login/welcome_login.dart';

class CheckUserAccount extends StatelessWidget {
  const CheckUserAccount({super.key});

  @override
  Widget build(BuildContext context) {
    final dynamic size = AppLayout.getSize(context);

    return Scaffold(
      body: BoardingLayout(
        column: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Text(
              "Do you have an account?",
              style: AppTypography.largeTitle,
            ),
            const Gap(30),
            SizedBox(
              width: size.width,
              child: const Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  CheckUserOption(
                    redirectToRoute: WelcomeLogin(),
                    placeholder: "Create account",
                  ),
                  CheckUserOption(
                    redirectToRoute: WelcomeLogin(),
                    placeholder: "Login",
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
