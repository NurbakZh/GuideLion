//
//  AuthViewController.swift
//  GuideLion
//
//  Created by mac on 09.10.2021.
//

import UIKit
import WebKit
import SwiftUI

class AuthViewController: UIViewController, WKNavigationDelegate {
    
    var accounts = [[Account]]()
    var acs = 0
    
    func LoadAccount() {
        guard let url = URL(string: "http://127.0.0.1:8000/api/student/")
        else {
            print("API is down")
            return
        }
        var request = URLRequest(url: url)
        request.httpMethod = "GET"
        request.addValue("application/json", forHTTPHeaderField: "Accept")
        URLSession.shared.dataTask(with: request) { [self] (data, response, error) in
            if let data = data {
                if let mana = try? JSONDecoder().decode([Account].self, from: data) {
                    self.accounts.append(mana)
                    self.acs+=1
                }
            }
        }.resume()
    }
    
    private let signInButton: UIButton = {
        let button = UIButton()
        button.backgroundColor = .systemBlue
        button.setTitle("Sign in", for: .normal)
        button.setTitleColor(.white, for: .normal)
        button.layer.cornerRadius = 8
        return button
    }()
    
    private let signUpButton: UIButton = {
        let button1 = UIButton()
        button1.setTitle("Sign Up", for: .normal)
        button1.titleLabel?.font =  UIFont(name: "AppleSDGothicNeo-Regular", size: 18)
        button1.setTitleColor(UIColor(red: 0.15, green: 0.496, blue: 0.988, alpha: 1), for: .normal)
        return button1
    }()
    
    private let txt: UITextField = {
        let txt = UITextField()
        txt.attributedPlaceholder = NSAttributedString(string: "Enter e-mail",
                                                        attributes: [NSAttributedString.Key.foregroundColor: UIColor(red: 0.657, green: 0.671, blue: 0.692, alpha: 1)])
        txt.textColor = UIColor(red: 0.197, green: 0.236, blue: 0.292, alpha: 1)
        txt.setLeftPaddingPoints(16)
        txt.setRightPaddingPoints(16)
        txt.autocapitalizationType = .none
        txt.font = UIFont(name: "AppleSDGothicNeo-Medium", size: 20.0)
        txt.layer.cornerRadius = 8
        txt.layer.borderWidth = 1
        txt.layer.borderColor = UIColor(red: 0.4, green: 0.4, blue: 0.4, alpha: 0.14).cgColor
        txt.layer.shadowOpacity = 1
        txt.layer.shadowRadius = 8
        txt.layer.shadowOffset = CGSize(width: 0, height: 4)
        txt.layer.compositingFilter = "multiplyBlendMode"
        txt.layer.shadowColor = UIColor(red: 0.196, green: 0.196, blue: 0.279, alpha: 0.06).cgColor
        return txt
    }()
    
    
    
    private let txt1: UITextField = {
        let txt1 = UITextField()
        txt1.attributedPlaceholder = NSAttributedString(string: "Password",
                                                        attributes: [NSAttributedString.Key.foregroundColor: UIColor(red: 0.657, green: 0.671, blue: 0.692, alpha: 1)])
        txt1.textColor = UIColor(red: 0.197, green: 0.236, blue: 0.292, alpha: 1)
        txt1.setLeftPaddingPoints(16)
        txt1.setRightPaddingPoints(16)
        txt1.autocapitalizationType = .none
        txt1.isSecureTextEntry = true
        txt1.font = UIFont(name: "AppleSDGothicNeo-Medium", size: 20.0)
        txt1.layer.cornerRadius = 8
        txt1.layer.borderWidth = 1
        txt1.layer.borderColor = UIColor(red: 0.4, green: 0.4, blue: 0.4, alpha: 0.14).cgColor
        txt1.layer.shadowOpacity = 1
        txt1.layer.shadowRadius = 8
        txt1.layer.shadowOffset = CGSize(width: 0, height: 4)
        txt1.layer.compositingFilter = "multiplyBlendMode"
        txt1.layer.shadowColor = UIColor(red: 0.196, green: 0.196, blue: 0.279, alpha: 0.06).cgColor
        txt1.translatesAutoresizingMaskIntoConstraints = false
        return txt1
    }()
    
    private let lab: UILabel = {
        let lab = UILabel.init(frame: CGRect(x: 20, y: 356, width: 182, height: 28))
        lab.text = "Sign in"
        lab.textColor = UIColor(red: 0.197, green: 0.236, blue: 0.292, alpha: 1)
        lab.font = UIFont(name: "AppleSDGothicNeo-Bold", size: 24.0)
        return lab
    }()
    
    private let line: UILabel = {
        let line = UILabel()
        line.layer.backgroundColor = UIColor(red: 0.769, green: 0.769, blue: 0.769, alpha: 1).cgColor
        return line
    }()
    
    private let reg: UILabel = {
        let reg = UILabel()
        reg.text = "Don't have An account?"
        reg.textColor = UIColor(red: 0.197, green: 0.236, blue: 0.292, alpha: 1)
        reg.font = UIFont(name: "AppleSDGothicNeo-Regular", size: 12.0)
        return reg
    }()
    
    public var completionHandler: ((Bool) -> Void)?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        LoadAccount()
        let imageName = "Signin"
        let image = UIImage(named: imageName)
        let imageView = UIImageView(image: image!)
        imageView.frame = CGRect(x: 20, y: 100, width:view.width-40, height: 223)
        view.backgroundColor = .systemBackground
        view.addSubview(signUpButton)
        view.addSubview(reg)
        view.addSubview(line)
        view.addSubview(txt)
        view.addSubview(txt1)
        view.addSubview(lab)
        view.addSubview(imageView)
        view.addSubview(signInButton)
        signInButton.addTarget(self, action: #selector(didTapSignIn), for: .touchUpInside)
        signUpButton.addTarget(self, action: #selector(didTapSignUp), for: .touchUpInside)

    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        txt.frame = CGRect(x: 20, y: 396, width:view.width-40, height: 54)
        txt1.frame =  CGRect(x: 20, y: 466, width:view.width-40, height: 54)
        signInButton.frame = CGRect(x: 20, y: 560, width: view.width-40, height: 50)
        line.frame = CGRect(x: 20, y: 626, width:view.width-40, height: 1)
        reg.frame = CGRect(x: view.left+134, y: 646, width: 146, height: 16)
        signUpButton.frame = CGRect(x: view.left+165.5, y: 666, width: 59, height: 24)
    }
    
    @objc func didTapSignUp() {
        let vc = SignViewController()
        vc.navigationItem.largeTitleDisplayMode = .always
        navigationController?.pushViewController(vc, animated: true)
    }
    
    @IBAction func didTapSignIn() {
        LoadAccount()
        var c = 0
        var i = accounts[0][0]
        if(txt.hasText && txt1.hasText) {
            let mail = txt.text!
            let pass = txt1.text!
            for account in accounts[0] {
                if (mail == account.mail && pass == account.password) {
                    i = account
                    c = 1
                    break
                }
            }
            if(c == 1) {
                let vc = TabBarViewController(your_property: i.full_name)
                vc.navigationItem.largeTitleDisplayMode = .always
                navigationController?.pushViewController(vc, animated: true)
            }
            else {
                let alert = UIAlertController(title: "Error", message: "Mail or password is incorrect", preferredStyle: .alert)
                alert.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))
                self.present(alert, animated: true, completion: nil)
            }
        }
        else {
            let alert = UIAlertController(title: "Notice", message: "Please fill both mail and password", preferredStyle: .alert)
            alert.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))
            self.present(alert, animated: true, completion: nil)
        }
        
    }
}
