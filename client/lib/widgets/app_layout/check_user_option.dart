import 'package:flutter/material.dart';
import 'package:flutter_application/utils/helpers/app_layout.dart';
import 'package:flutter_application/utils/styles/colors.dart';
import 'package:flutter_application/utils/styles/typography.dart';

class CheckUserOption extends StatelessWidget {
  const CheckUserOption(
      {super.key, required this.redirectToRoute, required this.placeholder});

  final Widget redirectToRoute;
  final String placeholder;

  @override
  Widget build(BuildContext context) {
    final dynamic size = AppLayout.getSize(context);

    return InkWell(
      onTap: () => {
        Navigator.push(
            context, MaterialPageRoute(builder: (context) => redirectToRoute))
      },
      child: Container(
        decoration: BoxDecoration(
          color: AppColors.whiteColor,
          borderRadius: const BorderRadius.all(Radius.circular(20)),
        ),
        padding: const EdgeInsets.all(20.0),
        width: size.width * 0.44,
        height: size.height * 0.2,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Text(
              "Image TBC",
              style: AppTypography.callout
                  .copyWith(color: AppColors.smokyBlackColor),
            ),
            Text(
              placeholder,
              style: AppTypography.subhead.copyWith(
                color: AppColors.smokyBlackColor,
                fontWeight: FontWeight.bold,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
