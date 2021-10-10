//
//  SignViewController.swift
//  GuideLion
//
//  Created by mac on 10.10.2021.
//

import UIKit
import WebKit
import SwiftUI

class SignViewController: UIViewController, WKNavigationDelegate  {

    
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
        button.setTitle("Create an Account", for: .normal)
        button.setTitleColor(.white, for: .normal)
        button.layer.cornerRadius = 8
        return button
    }()
    
    private let signUpButton: UIButton = {
        let button1 = UIButton()
        button1.setTitle("Sign In", for: .normal)
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
    
    private let txt3: UITextField = {
        let txt3 = UITextField()
        txt3.attributedPlaceholder = NSAttributedString(string: "Enter your full name",
                                                        attributes: [NSAttributedString.Key.foregroundColor: UIColor(red: 0.657, green: 0.671, blue: 0.692, alpha: 1)])
        txt3.textColor = UIColor(red: 0.197, green: 0.236, blue: 0.292, alpha: 1)
        txt3.setLeftPaddingPoints(16)
        txt3.setRightPaddingPoints(16)
        txt3.autocapitalizationType = .none
        txt3.font = UIFont(name: "AppleSDGothicNeo-Medium", size: 20.0)
        txt3.layer.cornerRadius = 8
        txt3.layer.borderWidth = 1
        txt3.layer.borderColor = UIColor(red: 0.4, green: 0.4, blue: 0.4, alpha: 0.14).cgColor
        txt3.layer.shadowOpacity = 1
        txt3.layer.shadowRadius = 8
        txt3.layer.shadowOffset = CGSize(width: 0, height: 4)
        txt3.layer.compositingFilter = "multiplyBlendMode"
        txt3.layer.shadowColor = UIColor(red: 0.196, green: 0.196, blue: 0.279, alpha: 0.06).cgColor
        return txt3
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
        lab.text = "Create an account"
        lab.textColor = UIColor(red: 0.197, green: 0.236, blue: 0.292, alpha: 1)
        lab.font = UIFont(name: "AppleSDGothicNeo-Bold", size: 20.0)
        return lab
    }()
    
    private let line: UILabel = {
        let line = UILabel()
        line.layer.backgroundColor = UIColor(red: 0.769, green: 0.769, blue: 0.769, alpha: 1).cgColor
        return line
    }()
    
    private let reg: UILabel = {
        let reg = UILabel()
        reg.text = "Already have An account?"
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
        view.addSubview(txt3)
        view.addSubview(lab)
        view.addSubview(imageView)
        view.addSubview(signInButton)
        signInButton.addTarget(self, action: #selector(didTapSignIn), for: .touchUpInside)
        signUpButton.addTarget(self, action: #selector(didTapSignUp), for: .touchUpInside)

    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        txt3.frame = CGRect(x: 20, y: 396, width:view.width-40, height: 54)
        txt.frame =  CGRect(x: 20, y: 466, width:view.width-40, height: 54)
        txt1.frame = CGRect(x: 20, y: 536, width:view.width-40, height: 54)
        signInButton.frame = CGRect(x: 20, y: 630, width: view.width-40, height: 50)
        line.frame = CGRect(x: 20, y: 696, width:view.width-40, height: 1)
        reg.frame = CGRect(x: view.left+134, y: 716, width: 146, height: 16)
        signUpButton.frame = CGRect(x: view.left+165.5, y: 736, width: 59, height: 24)
    }
    
    @objc func didTapSignUp() {
        let vc = AuthViewController()
        vc.navigationItem.largeTitleDisplayMode = .always
        navigationController?.pushViewController(vc, animated: true)
    }
    
    func isValidEmail(_ email: String) -> Bool {
        let emailRegEx = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}"

        let emailPred = NSPredicate(format:"SELF MATCHES %@", emailRegEx)
        return emailPred.evaluate(with: email)
    }
    
    @objc func didTapSignIn() {
        LoadAccount()
        if(txt.hasText && txt1.hasText && txt3.hasText) {
            if(isValidEmail(txt.text!)) {
                let nam: String = txt3.text!
                let pas: String = txt1.text!
                let mai: String = txt.text!
                var max = 0
                print(accounts[0])
                for account in accounts[0] {
                    if (account.id>max) {
                        max = account.id
                    }
                }
                let parameters: [String: Any] = [
                    "id": max,
                    "full_name": nam,
                    "mail": mai,
                    "password": pas,
                    "created_at": "2021-10-10T20:11:10.078282Z"
                ]
                guard let url = URL(string: "http://127.0.0.1:8000/api/student/create")
                else {
                    print("API is down")
                    return
                }
                var request = URLRequest(url: url)
                request.httpMethod = "POST"
                request.setValue("Application/json", forHTTPHeaderField: "Content-Type")
                guard let httpBody = try? JSONSerialization.data(withJSONObject: parameters, options: []) else {
                        return
                    }
                request.httpBody = httpBody
                request.timeoutInterval = 20
                let session = URLSession.shared
                session.dataTask(with: request) { (data, response, error) in
                    if let response = response {
                        print(response)
                    }
                    if let data = data {
                        do {
                            let json = try JSONSerialization.jsonObject(with: data, options: [])
                            self.acs+=1
                            print(json)
                        } catch {
                            print(error)
                        }
                    }
                }.resume()

            }
            else {
                let alert = UIAlertController(title: "Notice", message: "Please write e-mail in correct format", preferredStyle: .alert)
                alert.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))
                self.present(alert, animated: true, completion: nil)
            }
        }
        else {
            let alert = UIAlertController(title: "Notice", message: "Please fill all spaces", preferredStyle: .alert)
            alert.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))
            self.present(alert, animated: true, completion: nil)
        }
        
    }

}
