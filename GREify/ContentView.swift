import SwiftUI

struct ContentView: View {
	var body: some View {
		NavigationView {
			Form {
					// App Icon Section
				Section {
					HStack {
						Spacer()
						
						VStack(spacing: 8) {
							Image("Icon")
								.resizable()
								.aspectRatio(contentMode: .fit)
								.frame(width: 120, height: 120)
								.clipShape(RoundedRectangle(cornerRadius: 28))
								.shadow(color: .black.opacity(0.1), radius: 10, x: 0, y: 6)
							
							Text("GREify Safari Extension")
								.font(.title)
								.fontWeight(.bold)
								.foregroundColor(.primary)
							
							Text("Replaces common words with GRE vocabulary to help you learn while browsing.")
								.font(.subheadline)
								.foregroundColor(.secondary)
								.multilineTextAlignment(.center)
						}
						
						Spacer()
					}
					
				}
				
					// Action Buttons Section
				Section {
					NavigationLink(destination: SetupInstructionsView()) {
						HStack {
							Image(systemName: "gearshape.fill")
							
							Text("View Setup Instructions")
								.font(.body)
						}
					}
				}
				
					// Footer Link Section
				Section {
					Link(destination: URL(string: "https://shengyuan-lu.com")!) {
						HStack {
							Image(systemName: "link")
							
							Text("shengyuan-lu.com")
								.font(.body)
						}
					}
				}
			}
			.navigationBarTitle("GREify", displayMode: .inline)
		}
	}
}

