//
//  SetupInstructionView.swift
//  GREify
//
//  Created by Shengyuan Lu on 5/9/25.
//

import SwiftUI

struct SetupInstructionsView: View {
	var body: some View {
		ScrollView {
			VStack(alignment: .leading, spacing: 20) {
				Text("How to Enable GREify in Safari")
					.font(.largeTitle.bold())
					.padding(.bottom)
				
				InstructionCard(step: "1", text: "Open the Settings app and go to Apps -> Safari -> Extensions -> GREify.")
				InstructionCard(step: "2", text: "Toggle on **Allow Extension** and **Allow in Private Browsing**.")
				InstructionCard(step: "3", text: "Under **Permissions**, set All Websites to **Allow**.")
				InstructionCard(step: "4", text: "Open Safari and visit [any webpage](https://www.google.com/).")
				InstructionCard(step: "5", text: "Tap the **puzzle piece icon** in the address bar.", sfSymbolName: "puzzlepiece.extension.fill")
				InstructionCard(step: "6", text: "Tap **GREify**.")
				InstructionCard(step: "7", text: "If prompted, tap **Always Allow**.")
				InstructionCard(step: "8", text: "Confirm by tapping **Always Allow on Every Website**")
				
				Spacer()
			}
			.padding()
		}
	}
}

struct InstructionCard: View {
	
	@Environment(\.colorScheme) var colorScheme
	
	let step: String
	let text: String
	var sfSymbolName: String? = nil // Optional icon name
	
	var body: some View {
		VStack(alignment: .leading, spacing: 16) {
			HStack(alignment: .center, spacing: 16) {
				Text(step)
					.font(.title2.bold())
					.frame(width: 36, height: 36)
					.background(Color.accentColor.opacity(0.2))
					.foregroundColor(.accentColor)
					.clipShape(Circle())
				
				Text(.init(text))
					.font(.body)
					.foregroundColor(.primary)
				
				Spacer()
				
				if let symbolName = sfSymbolName {
					Image(systemName: symbolName)
						.font(.body)
						.foregroundColor(.primary)
				}
			}
			.padding()
			.background(colorScheme == .light ? Color.secondary.opacity(0.08) : Color.secondary.opacity(0.25))
			.cornerRadius(12)
			.shadow(color: .black.opacity(0.05), radius: 4, x: 0, y: 2)
		}
		.frame(maxWidth: .infinity)
	}
}

