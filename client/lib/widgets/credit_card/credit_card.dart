import 'package:flutter/material.dart';
import 'package:flutter_application/source/model/credit_card_model.dart';
import 'package:flutter_application/utils/styles/typography.dart';

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
      margin: const EdgeInsets.symmetric(horizontal: 10.0),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        color: card.color,
        boxShadow: [
          BoxShadow(
            color: card.color.withOpacity(.2),
            spreadRadius: 3,
            blurRadius: 3,
            offset: const Offset(0, 3),
          ),
        ],
      ),
      child: Stack(
        children: [
          Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    alignment: Alignment.centerLeft,
                    child: Text(
                      card.name,
                      style: AppTypography.titleOne.copyWith(
                        color: card.textColor,
                      ),
                    ),
                  ),
                  Container(
                    alignment: Alignment.centerLeft,
                    child: Text(
                      '**** **** **** ${card.number.toString()}',
                      style: AppTypography.subhead.copyWith(
                        color: card.textColor,
                      ),
                    ),
                  ),
                  Container(
                    alignment: Alignment.centerLeft,
                    child: Text(
                      card.date,
                      style: AppTypography.subhead.copyWith(
                        color: card.textColor,
                      ),
                    ),
                  ),
                ],
              ),
              Container(
                alignment: Alignment.centerLeft,
                child: Text(
                  '${card.currency} ${card.balance.toStringAsFixed(2)}',
                  style: AppTypography.largeTitle.copyWith(
                    color: card.textColor,
                  ),
                ),
              ),
            ],
          ),
          Positioned(
            bottom: 10.0,
            right: 0,
            child: Image.asset(
              'assets/images/visa-logo.png',
              semanticLabel: "Black Visa Logo",
              filterQuality: FilterQuality.medium,
            ),
          ),
        ],
      ),
    );
  }
}
