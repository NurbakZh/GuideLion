//
//  WelcomeViewController.swift
//  GuideLion
//
//  Created by mac on 09.10.2021.
//

import UIKit

class WelcomeViewController: UIViewController {
    
    private let signInButton: UIButton = {
        let button = UIButton()
        button.backgroundColor = .systemBlue
        button.setTitle("Sign in", for: .normal)
        button.setTitleColor(.white, for: .normal)
        button.layer.cornerRadius = 8
        return button
    }()
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        title = "Welcome to GuideLion"
        view.backgroundColor = .systemBackground
        let imageName = "Welcomer"
        let image = UIImage(named: imageName)
        let imageView = UIImageView(image: image!)
        imageView.frame = CGRect(x: 20, y: 250, width:view.width-40, height: 295)
        let lab = UILabel.init(frame: CGRect(x: 20, y: 120, width: 374, height: 100))
        lab.text = "The place, where people help each other"
        lab.numberOfLines = 2
        lab.lineBreakMode = .byWordWrapping
        lab.textColor = UIColor(.gray)
        lab.font = UIFont(name: "AppleSDGothicNeo-Bold", size: 22.0)
        view.addSubview(lab)
        view.addSubview(imageView)
        view.addSubview(signInButton)
        signInButton.addTarget(self, action: #selector(didTapSignIn), for: .touchUpInside)
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        signInButton.frame = CGRect(x: 20, y: view.height-250-view.safeAreaInsets.bottom, width: view.width-40, height: 50)
    }

    @objc func didTapSignIn() {
        let vc = AuthViewController()
        vc.completionHandler = { [weak self] success in
            DispatchQueue.main.async {
                self?.handleSignIn(success: success)
            }
        }
        vc.navigationItem.largeTitleDisplayMode = .always
        navigationController?.pushViewController(vc, animated: true)
    }
    
    private func handleSignIn(success: Bool) {
        
    }
}
