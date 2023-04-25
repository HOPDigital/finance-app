import 'package:flutter/material.dart';

// Pages
import 'package:flutter_application/pages/boarding/boarding_screen.dart';
import 'package:flutter_application/source/model/credit_card_model.dart';
import 'package:flutter_application/widgets/credit_card.dart';

void main() => runApp(const MainApp());

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
      ),
      home: Scaffold(
        body: Column(
          children: [
            const SizedBox(height: 100),
            Center(
                child: CreditCardWidget(
                    card: CreditCard(balance: 2000, number: 2000))),
          ],
        ),
      ),
    );
  }
}
