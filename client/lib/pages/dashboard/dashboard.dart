import 'package:flutter/material.dart';

// Pages
import 'package:flutter_application/pages/dashboard/dashboard_card.dart';

// Utils
import 'package:flutter_application/utils/helpers/app_layout.dart';
import 'package:flutter_application/utils/styles/colors.dart';
import 'package:flutter_application/utils/styles/typography.dart';

// Dependecies
import 'package:gap/gap.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';

class Dashboard extends StatefulWidget {
  const Dashboard({super.key});

  @override
  State<Dashboard> createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard> {
  final ScrollController _controller = ScrollController();
  int _currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    final dynamic size = AppLayout.getSize(context);

    return SafeArea(
      child: Container(
        decoration: BoxDecoration(color: AppColors.blueColor),
        padding: const EdgeInsets.only(left: 10.0),
        width: size.width,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          mainAxisSize: MainAxisSize.max,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Text(
              "Welcome, Matt",
              style: AppTypography.textBody.copyWith(
                color: AppColors.whiteColor,
                fontWeight: FontWeight.w600,
              ),
              textAlign: TextAlign.center,
            ),
            const Gap(20),
            AnimatedSmoothIndicator(
              activeIndex: _currentIndex,
              count: 3,
              axisDirection: Axis.horizontal,
              curve: Curves.easeInOut,
              duration: const Duration(milliseconds: 300),
              onDotClicked: (int index) {
                setState(() {
                  _currentIndex = index;
                });
              },
              effect: ExpandingDotsEffect(
                activeDotColor: AppColors.whiteColor,
                dotColor: AppColors.silverColor,
                dotHeight: 10,
                dotWidth: 10,
                spacing: 10,
              ),
            ),
            const Gap(20),
            Text(
              "All accounts",
              style: AppTypography.largeTitle.copyWith(
                color: AppColors.whiteColor,
              ),
              textAlign: TextAlign.center,
            ),
            const Gap(15),
            SingleChildScrollView(
              controller: _controller,
              scrollDirection: Axis.horizontal,
              padding: EdgeInsets.symmetric(horizontal: AppLayout.getWidth(10)),
              child: Row(
                children: const [
                  DashboardCard(),
                  DashboardCard(),
                  DashboardCard(),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
