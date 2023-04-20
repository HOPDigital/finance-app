import 'package:flutter/material.dart';
import 'package:flutter_application/source/model/CreditCard.dart';
import 'package:flutter_application/utils/styles/colors.dart';
import 'package:flutter_application/utils/styles/typography.dart';
import 'package:google_fonts/google_fonts.dart';

class CreditCardWidget extends StatelessWidget {
  final CreditCard card;

  CreditCardWidget({super.key, required this.card});

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.topLeft,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(15),
        color: AppColors.blueColor,
      ),
      height: 200,
      width: 350,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          Text(
            card.name,
            style: GoogleFonts.montserrat(
                fontSize: 28,
                fontWeight: FontWeight.bold,
                color: AppColors.whiteColor),
          ),
          Text(
            card.number.toString(),
            style: GoogleFonts.montserrat(
              fontSize: 18,
              fontWeight: FontWeight.normal,
              color: AppColors.whiteColor,
            ),
          ),
        ],
      ),
    );
  }
}
