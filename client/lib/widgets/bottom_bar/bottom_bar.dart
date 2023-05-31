import 'package:flutter/material.dart';
import 'package:flutter_application/pages/dashboard/dashboard.dart';

// Utils
import 'package:flutter_application/utils/styles/colors.dart';

class BottomBar extends StatefulWidget {
  const BottomBar({super.key});

  @override
  State<BottomBar> createState() => _BottomBarState();
}

class _BottomBarState extends State<BottomBar> {
  int _selectedPage = 0;

  static final List<Widget> _widgetPages = <Widget>[
    const Dashboard(),
    const Text("Cards"),
    const Text("Account History"),
    const Text("Payments"),
  ];

  void _onItemSelected(int index) {
    setState(() {
      _selectedPage = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: _widgetPages[_selectedPage],
      ),
      bottomNavigationBar: ClipRRect(
        borderRadius: const BorderRadius.all(
          Radius.circular(30),
        ),
        child: BottomNavigationBar(
          onTap: _onItemSelected,
          currentIndex: _selectedPage,
          elevation: 10,
          showSelectedLabels: false,
          showUnselectedLabels: false,
          iconSize: 26.0,
          type: BottomNavigationBarType.fixed,
          selectedItemColor: AppColors.blueColor,
          unselectedItemColor: AppColors.silverColor,
          items: const <BottomNavigationBarItem>[
            BottomNavigationBarItem(
              icon: Icon(Icons.account_balance_wallet_outlined),
              activeIcon: Icon(Icons.account_balance_wallet_rounded),
              label: "Dashboard",
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.credit_card_outlined),
              activeIcon: Icon(Icons.credit_card_rounded),
              label: "Cards",
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.analytics_outlined),
              activeIcon: Icon(Icons.analytics_rounded),
              label: "Account History",
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.account_balance_wallet_outlined),
              activeIcon: Icon(Icons.account_balance_wallet_rounded),
              label: "Payments",
            ),
          ],
        ),
      ),
    );
  }
}
