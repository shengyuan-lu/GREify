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
				
				InstructionCard(step: "1", text: "Open the **Settings** app.")
				InstructionCard(step: "2", text: "Scroll down and tap **Safari**.")
				InstructionCard(step: "3", text: "Tap **Extensions**.")
				InstructionCard(step: "4", text: "Find and enable **GREify**.")
				InstructionCard(step: "5", text: "Grant necessary permissions.")
				InstructionCard(step: "6", text: "You're done! Browse the web and learn new words.")
				
				Spacer()
			}
			.padding()
		}
	}
}

struct InstructionCard: View {
	let step: String
	let text: String
	
	var body: some View {
		VStack(alignment: .leading, spacing: 16) {
			HStack(alignment: .top, spacing: 16) {
				Text(step)
					.font(.title2.bold())
					.frame(width: 36, height: 36)
					.background(Color.accentColor.opacity(0.1))
					.foregroundColor(.accentColor)
					.clipShape(Circle())
				
				Text(.init(text))
					.font(.body)
					.foregroundColor(.primary)
				
				Spacer()
			}
			.padding()
			.background(Color(.systemGray6))
			.cornerRadius(12)
			.shadow(color: .black.opacity(0.05), radius: 4, x: 0, y: 2)
		}
		.frame(maxWidth: .infinity)
	}
}

