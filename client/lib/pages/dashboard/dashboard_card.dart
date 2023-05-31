import 'package:flutter/material.dart';

// Utils
import 'package:flutter_application/utils/helpers/app_layout.dart';
import 'package:flutter_application/utils/styles/colors.dart';

class DashboardCard extends StatelessWidget {
  const DashboardCard({super.key});

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
    );
  }
}