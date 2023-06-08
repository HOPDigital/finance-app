import 'package:flutter/material.dart';

// Pages
import 'package:flutter_application/pages/settings/settings_screen.dart';
import 'package:flutter_application/source/model/credit_card_model.dart';

// Utils & Dependencies
import 'package:flutter_application/utils/helpers/app_layout.dart';
import 'package:flutter_application/utils/styles/colors.dart';
import 'package:flutter_application/widgets/app_layout/app_screen_title.dart';
import 'package:flutter_application/widgets/credit_card/credit_card.dart';
import 'package:gap/gap.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';

class CardsScreen extends StatefulWidget {
  const CardsScreen({super.key});

  @override
  State<CardsScreen> createState() => _CardsScreenState();
}

class _CardsScreenState extends State<CardsScreen> {
  final PageController _controller = PageController();
  int currentCard = 0;

  @override
  Widget build(BuildContext context) {
    final dynamic size = AppLayout.getSize(context);

    return SafeArea(
      child: Container(
        decoration: BoxDecoration(color: AppColors.blueColor),
        width: size.width,
        height: size.height,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          mainAxisSize: MainAxisSize.max,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            const Gap(15),
            AppScreenTitle(
              text: "Cards",
              rightButton: IconButton(
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
            ),
            const Gap(20),
            SmoothPageIndicator(
              controller: _controller,
              count: 5,
              onDotClicked: (int index) {
                setState(() {
                  currentCard = index;
                });
              },
              effect: ScrollingDotsEffect(
                activeDotScale: 1.5,
                activeStrokeWidth: 1.0,
                dotHeight: 10.0,
                dotWidth: 10.0,
                maxVisibleDots: 5,
                dotColor: AppColors.silverColor,
                activeDotColor: AppColors.whiteColor,
                fixedCenter: true,
              ),
            ),
            const Gap(20),
            SizedBox(
              width: size.width * 0.95,
              height: 200,
              child: Padding(
                padding: const EdgeInsets.only(left: 10.0),
                child: PageView(
                  controller: _controller,
                  onPageChanged: (int index) => {
                    setState(() {
                      currentCard = index;
                    })
                  },
                  children: [
                    CreditCardWidget(
                      card: CreditCard(
                        balance: 2000,
                        number: 1819,
                        color: AppColors.whiteColor,
                        textColor: Colors.black,
                      ),
                    ),
                    CreditCardWidget(
                      card: CreditCard(
                        balance: 180.00,
                        number: 3536,
                        color: AppColors.whiteColor,
                        textColor: Colors.black,
                      ),
                    ),
                    CreditCardWidget(
                      card: CreditCard(
                        balance: 732054.00,
                        number: 8328,
                        color: AppColors.whiteColor,
                        textColor: Colors.black,
                      ),
                    ),
                    CreditCardWidget(
                      card: CreditCard(
                        balance: 732054.00,
                        number: 8328,
                        color: AppColors.whiteColor,
                        textColor: Colors.black,
                      ),
                    ),
                    CreditCardWidget(
                      card: CreditCard(
                        balance: 732054.00,
                        number: 8328,
                        color: AppColors.whiteColor,
                        textColor: Colors.black,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
