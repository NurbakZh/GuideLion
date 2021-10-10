//
//  APICaller.swift
//  GuideLion
//
//  Created by mac on 09.10.2021.
//

import Foundation

struct Account: Codable, Hashable {
    let id: Int
    let full_name: String
    let mail: String
    let profile_photo: String?
    let password: String
    let created_at: String
}

struct Mentor: Codable, Hashable {
    let id: Int
    let full_name: String
    let mail: String
    let profile_photo: String?
    let password: String
    let created_at: String
    let category: String
    let price: Int
    let rating: Int
}

struct InputDetails {
    static var details: InputDetails = InputDetails()
    var name: String = "1"
}
