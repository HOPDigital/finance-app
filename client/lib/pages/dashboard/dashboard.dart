import 'package:flutter/material.dart';

// Pages
import 'package:flutter_application/pages/dashboard/dashboard_card.dart';
import 'package:flutter_application/pages/settings/settings_screen.dart';

// Utils
import 'package:flutter_application/utils/helpers/app_layout.dart';
import 'package:flutter_application/utils/styles/colors.dart';
import 'package:flutter_application/utils/styles/typography.dart';
import 'package:flutter_application/widgets/drawer/drawer.dart';

// Dependecies
import 'package:gap/gap.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';

class Dashboard extends StatefulWidget {
  const Dashboard({super.key});

  @override
  State<Dashboard> createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard> {
  GlobalKey<ScaffoldState> scaffoldKey = GlobalKey<ScaffoldState>();

  final PageController _controller = PageController();
  int _currentIndex = 0;

  @override
  Widget build(BuildContext context) {
    final dynamic size = AppLayout.getSize(context);

    return Scaffold(
      key: scaffoldKey,
      drawer: const SafeArea(
        child: DrawerWidget(),
      ),
      body: SafeArea(
        child: Container(
          decoration: BoxDecoration(color: AppColors.blueColor),
          padding: const EdgeInsets.only(left: 10.0),
          width: size.width,
          height: size.height,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            mainAxisSize: MainAxisSize.max,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              const Gap(15),
              Padding(
                padding: EdgeInsets.symmetric(
                  horizontal: AppLayout.getWidth(15),
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    IconButton(
                      onPressed: () => {scaffoldKey.currentState?.openDrawer()},
                      icon: Icon(
                        Icons.menu_open,
                        color: AppColors.whiteColor,
                      ),
                    ),
                    const Gap(5),
                    IconButton(
                      onPressed: () => Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (_) => const SettingsScreen(),
                        ),
                      ),
                      icon: Icon(
                        Icons.settings_outlined,
                        color: AppColors.whiteColor,
                      ),
                    ),
                  ],
                ),
              ),
              const Gap(20),
              SmoothPageIndicator(
                controller: _controller,
                count: 3,
                onDotClicked: (int index) {
                  setState(() {
                    _currentIndex = index;
                  });
                },
                effect: ScrollingDotsEffect(
                  activeDotScale: 1.3,
                  activeStrokeWidth: 1.0,
                  dotHeight: 10.0,
                  dotWidth: 10.0,
                  dotColor: AppColors.silverColor,
                  activeDotColor: AppColors.whiteColor,
                  spacing: 10.0,
                  fixedCenter: false,
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
              SizedBox(
                width: size.width * 0.95,
                height: AppLayout.getHeight(540),
                child: Padding(
                  padding: const EdgeInsets.only(left: 10.0),
                  child: PageView(
                    controller: _controller,
                    onPageChanged: (int index) => {
                      setState(() {
                        _currentIndex = index;
                      })
                    },
                    children: const <Widget>[
                      DashboardCard(
                        accountType: "Current Account",
                      ),
                      DashboardCard(
                        accountType: "Home Account",
                      ),
                      DashboardCard(
                        accountType: "Business Account",
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
