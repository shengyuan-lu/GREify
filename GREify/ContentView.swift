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
								.font(.headline)
								.fontWeight(.bold)
								.foregroundColor(.white)
								.padding(.horizontal, 16)
								.padding(.vertical, 8)
								.background(Color.blue)
								.clipShape(Capsule())

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
						Text("1. Despite optimizations, GREify may produce inaccurante sentences.")
						
						Divider()
						
						Text("2. GREify will not run on most search engine and dictionary websites to avoid confusion.")
						
						Divider()
						
						Text("3. You can turn off the extension at anytime to view the original website.")
					}
					.font(.footnote)
					.foregroundColor(.secondary)
					
				}
				
				// Link Section
				Section("Links") {

					Link(destination: URL(string: "https://discord.gg/Uhrarh3cxY")!) {
						Text("Join Discord Community")
							.font(.body)
							.foregroundColor(.accentColor)
					}
					
					Link(destination: URL(string: "https://shengyuan-lu.com")!) {
						Text("Visit Developer Website")
							.font(.body)
							.foregroundColor(.accentColor)
					}
					
					Link(destination: URL(string: "https://shengyuan-lu.com/project/greify")!) {
						Text("Overview GREify Features")
							.font(.body)
							.foregroundColor(.accentColor)
					}
					
					Link(destination: URL(string: "https://shengyuan-lu.com/support/unified-support")!) {
						Text("File Bug Report")
							.font(.body)
							.foregroundColor(.accentColor)
					}
					
					Link(destination: URL(string: "https://shengyuan-lu.com/privacypolicy/greify")!) {
						Text("View Privacy Policy")
							.font(.body)
							.foregroundColor(.accentColor)
					}
				}
				
				// About Section
				Section(
					header: Text("About"),
					footer: AnyView(
						HStack {
							Spacer()
							Text("Made By Shengyuan Lu in San Francisco Bay")
							Spacer()
						}
					)
				) {
					HStack {
						Text("App Version")
						Spacer()
						Text(getAppVersion())
							.foregroundColor(.secondary)
					}
					
					HStack {
						Text("Device Version")
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
