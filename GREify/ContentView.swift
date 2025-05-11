import SwiftUI

struct ContentView: View {
	var body: some View {
		NavigationView {
			Form {
				// App Icon Section
				Section {
					HStack {
						Spacer()
						
						VStack(spacing: 16) {
							Image("Icon")
								.resizable()
								.aspectRatio(contentMode: .fit)
								.frame(width: 120, height: 120)
								.clipShape(RoundedRectangle(cornerRadius: 28))
								.shadow(color: .black.opacity(0.15), radius: 10, x: 0, y: 6)
							
							Text("GREify")
								.font(.title)
								.fontWeight(.bold)
								.foregroundColor(.primary)
							
							Text("Safari Browser Extension")
								.font(.title3)
								.fontWeight(.bold)
								.foregroundColor(.blue)
							
							Text("Replaces common words with GRE vocabulary to help you learn while browsing.")
								.font(.subheadline)
								.foregroundColor(.secondary)
								.multilineTextAlignment(.center)
						}
						
						Spacer()
					}
					.padding(.vertical, 20)
					
				}
				
				Section("Setup Extension") {
					NavigationLink(destination: SetupInstructionsView()) {
						Text("View Setup Instructions")
							.font(.body)
							.bold()
							.foregroundColor(.blue)
					}
					.buttonStyle(PlainButtonStyle())
				}
				
				Section("Note") {
					
					VStack(alignment: .leading, spacing: 8) {
						Text("GREify uses a deterministic algorithm when replacing words. This may result in inaccurante sentences due to the nature of the English language.")
						
						Divider()
						
						Text("GREify will not run on most search engine and dictionary websites.")
						
						Divider()
						
						Text("You can turn off the extension at anytime to view the original website.")
					}
					.font(.footnote)
					.foregroundColor(.secondary)
					
				}
				
				// Footer Link Section
				Section("Visit Developer Website") {
					Link(destination: URL(string: "https://shengyuan-lu.com")!) {
						
						Text("shengyuan-lu.com")
							.font(.body)
							.foregroundColor(.primary)
						
					}
				}
				
				// Version Information Section
				Section("Version") {
					HStack {
						Text("App Version")
						Spacer()
						Text(getAppVersion())
							.foregroundColor(.secondary)
					}
					
					HStack {
						Text("iOS Version")
						Spacer()
						Text(getIOSVersion())
							.foregroundColor(.secondary)
					}
				}
			}
			.scrollIndicators(.hidden)
		}
		.navigationViewStyle(StackNavigationViewStyle())
	}
	
	// Helper functions to get versions
	private func getAppVersion() -> String {
		if let version = Bundle.main.infoDictionary?["CFBundleShortVersionString"] as? String,
		   let build = Bundle.main.infoDictionary?["CFBundleVersion"] as? String {
			return "v\(version) b\(build)"
		}
		return "Unknown"
	}
	
	private func getIOSVersion() -> String {
		return UIDevice.current.systemVersion
	}
}
