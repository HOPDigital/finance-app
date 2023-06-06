import 'package:flutter/material.dart';

// Utils
import 'package:flutter_application/utils/helpers/app_layout.dart';
import 'package:flutter_application/utils/styles/colors.dart';
import 'package:flutter_application/utils/styles/typography.dart';

class DashboardCard extends StatelessWidget {
  const DashboardCard({super.key, required this.accountType, this.currentBalance = "--.---,--"});

  final String accountType;
  final String currentBalance;

  @override
  Widget build(BuildContext context) {
    final dynamic size = AppLayout.getSize(context);

    return Container(
      decoration: BoxDecoration(
        borderRadius: const BorderRadius.all(Radius.circular(25)),
        color: AppColors.whiteColor,
      ),
      height: AppLayout.getHeight(540),
      width: size.width * 0.85,
      margin: EdgeInsets.only(right: AppLayout.getHeight(15)),
      padding: EdgeInsets.symmetric(
        horizontal: AppLayout.getWidth(35),
        vertical: AppLayout.getHeight(25),
      ),
      child: Stack(
        alignment: Alignment.topCenter,
        children: [
          Text(
            accountType,
            style: AppTypography.titleOne.copyWith(color: Colors.black),
            textAlign: TextAlign.center,
          ),
          Positioned(
            bottom: 10,
            left: 0,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  currentBalance,
                  style: AppTypography.titleOne.copyWith(
                    color: Colors.black,
                    fontWeight: FontWeight.w900,
                  ),
                ),
                Text(
                  "Current balance",
                  style: AppTypography.footnote.copyWith(color: Colors.black),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
