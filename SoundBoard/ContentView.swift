//
//  ContentView.swift
//  SoundBoard
//
//  Created by Kyle B on 02/11/2025.
//

import SwiftUI
import AVFoundation

var audioPlayer: AVAudioPlayer?

func playSound(sound: String) {
    do {
        try AVAudioSession.sharedInstance().setCategory(.playback, options: [])
        try AVAudioSession.sharedInstance().setActive(true)
    } catch {
        print("Failed to set audio session category: \(error)")
        return
    }

    guard let soundURL = Bundle.main.url(forResource: sound, withExtension: "mp3") else {
        print("Sound file not found")
        return
    }

    do {
        audioPlayer = try AVAudioPlayer(contentsOf: soundURL)
        audioPlayer?.prepareToPlay()
        audioPlayer?.play()
    } catch {
        print("Failed to initialize AVAudioPlayer: \(error)")
    }
}

struct ContentView: View {
    var body: some View {
        Grid {
            Button {
                playSound(sound: "boom")
            } label: {
                Image("rock").resizable()
            }
            
            Button {
                playSound(sound: "shaw")
            } label: {
                Image("hornet").resizable()
            }
            
            Button {
                playSound(sound: "tm_theme")
            } label: {
                Image("tm_logo").resizable()
            }
            
            Button {
                playSound(sound: "foxTheme")
            } label: {
                Image("fox").resizable()
            }
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
