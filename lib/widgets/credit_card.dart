import 'package:flutter/material.dart';
import 'package:flutter_application/source/model/credit_card_model.dart';
import 'package:flutter_application/utils/styles/colors.dart';
import 'package:flutter_application/utils/styles/typography.dart';
import 'package:google_fonts/google_fonts.dart';

class CreditCardWidget extends StatelessWidget {
  const CreditCardWidget({super.key, required this.card});

  final CreditCard card;

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.topLeft,
      height: 200,
      width: 350,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(20),
          color: AppColors.blueColor,
          boxShadow: [
            BoxShadow(
                color: Colors.grey.withOpacity(.4),
                spreadRadius: 5,
                blurRadius: 7,
                offset: const Offset(0, 3))
          ]),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          Container(
            alignment: Alignment.centerLeft,
            child: Text(
              card.name,
              style: AppTypography.titleOne,
            ),
          ),
          Container(
            alignment: Alignment.centerLeft,
            child: Text(
              '**** **** **** ${card.number.toString()}',
              style: AppTypography.subhead,
            ),
          ),
          Container(
            alignment: Alignment.centerLeft,
            child: Text(
              card.date,
              style: AppTypography.subhead,
            ),
          ),
          const SizedBox(height: 10),
          Container(
            alignment: Alignment.centerLeft,
            child: Text(
              '${card.currency} ${card.balance.toStringAsFixed(2)}',
              style: AppTypography.heroText,
            ),
          ),
          Container(
            alignment: Alignment.centerLeft,
            child: Text('Current balance', style: AppTypography.subhead),
          ),
        ],
      ),
    );
  }
}
