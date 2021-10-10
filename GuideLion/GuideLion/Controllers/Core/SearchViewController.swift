//
//  SearchViewController.swift
//  GuideLion
//
//  Created by mac on 09.10.2021.
//

import UIKit

class SearchViewController: UIViewController {
    
    var mentors = [[Mentor]]()
    
    func LoadAccount() {
        guard let url = URL(string: "http://127.0.0.1:8000/api/curator/best")
        else {
            print("API is down")
            return
        }
        var request = URLRequest(url: url)
        request.httpMethod = "GET"
        request.addValue("application/json", forHTTPHeaderField: "Accept")
        URLSession.shared.dataTask(with: request) { [self] (data, response, error) in
            if let data = data {
                if let mana = try? JSONDecoder().decode([Mentor].self, from: data) {
                    self.mentors.append(mana)
                }
            }
        }.resume()
    }
    
    let your_property : String

    init(your_property: String) {
       self.your_property = your_property
       super.init(nibName: nil, bundle: nil)
    }
    required init?(coder: NSCoder) {
        fatalError("init(coder:) is not supported")
    }
    
    private let top: UILabel = {
        let top = UILabel()
        top.text = "Research Mentors"
        top.textColor = UIColor(red: 0.197, green: 0.236, blue: 0.292, alpha: 1)
        top.font = UIFont(name: "AppleSDGothicNeo-Regular", size: 22.0)
        return top
    }()
    
    private let viewAll: UIButton = {
        let viewAll = UIButton()
        viewAll.setTitle("Search", for: .normal)
        viewAll.titleLabel?.font =  UIFont(name: "AppleSDGothicNeo-Regular", size: 17)
        viewAll.setTitleColor(UIColor(red: 0.15, green: 0.496, blue: 0.988, alpha: 1), for: .normal)
        return viewAll
    }()
    
    private let top1: UILabel = {
        let top1 = UILabel()
        top1.text = "Mentors"
        top1.textColor = UIColor(red: 0.657, green: 0.671, blue: 0.692, alpha: 1)
        top1.font = UIFont(name: "AppleSDGothicNeo-Regular", size: 17.0)
        return top1
    }()
    
    private let txt: UITextField = {
        let txt = UITextField()
        txt.attributedPlaceholder = NSAttributedString(string: "Search",
                                                        attributes: [NSAttributedString.Key.foregroundColor: UIColor(red: 0.657, green: 0.671, blue: 0.692, alpha: 1)])
        txt.textColor = UIColor(red: 0.197, green: 0.236, blue: 0.292, alpha: 1)
        txt.setLeftPaddingPoints(16)
        txt.setRightPaddingPoints(16)
        txt.autocapitalizationType = .none
        txt.font = UIFont(name: "AppleSDGothicNeo-Medium", size: 20.0)
        txt.layer.cornerRadius = 8
        txt.layer.borderWidth = 1
        txt.layer.borderColor = UIColor(red: 0.0, green: 0.8, blue: 0.9, alpha: 1.0).cgColor
        return txt
    }()
    
    private let name: UILabel = {
        let name = UILabel()
        name.text = "Nurbek Zh"
        name.font = UIFont(name: "AppleSDGothicNeo-Regular", size: 12.0)
        name.textColor = UIColor(red: 0.657, green: 0.671, blue: 0.692, alpha: 1)
        name.frame = CGRect(x: 20, y: 512, width: 60, height: 16)
        return name
    }()
    
    private let name1: UILabel = {
        let name1 = UILabel()
        name1.text = "Nurbek Zh"
        name1.font = UIFont(name: "AppleSDGothicNeo-Regular", size: 12.0)
        name1.textColor = UIColor(red: 0.657, green: 0.671, blue: 0.692, alpha: 1)
        name1.frame = CGRect(x: 20, y: 619, width: 60, height: 16)
        return name1
    }()
    
    private let name2: UILabel = {
        let name2 = UILabel()
        name2.text = "Nurbek Zh"
        name2.font = UIFont(name: "AppleSDGothicNeo-Regular", size: 12.0)
        name2.textColor = UIColor(red: 0.657, green: 0.671, blue: 0.692, alpha: 1)
        name2.frame = CGRect(x: 20, y: 726, width: 60, height: 16)
        return name2
    }()
    
    private let name3: UILabel = {
        let name3 = UILabel()
        name3.text = "Nurbek Z"
        name3.font = UIFont(name: "AppleSDGothicNeo-Regular", size: 12.0)
        name3.textColor = UIColor(red: 0.657, green: 0.671, blue: 0.692, alpha: 1)
        name3.frame = CGRect(x: 20, y: 405, width: 60, height: 16)
        return name3
    }()
    
    private let imageView1: UIButton = {
        let imageName1 = "1"
        let image1 = UIImage(named: imageName1)
        let imageView1 = UIButton()
        imageView1.setImage(image1!, for: .normal)
        imageView1.frame = CGRect(x: 20, y: 445, width: 61, height: 63)
        return imageView1
    }()
    
    private let imageView2: UIButton = {
        let imageName2 = "2"
        let image2 = UIImage(named: imageName2)
        let imageView2 = UIButton()
        imageView2.setImage(image2!, for: .normal)
        imageView2.frame = CGRect(x: 20, y: 552, width: 61, height: 63)
        return imageView2
    }()
    
    private let imageView3: UIButton = {
        let imageName3 = "3"
        let image3 = UIImage(named: imageName3)
        let imageView3 = UIButton()
        imageView3.setImage(image3!, for: .normal)
        imageView3.frame = CGRect(x: 20, y: 659, width: 61, height: 63)
        return imageView3
    }()
    
    private let imageView4: UIButton = {
        let imageName4 = "4"
        let image4 = UIImage(named: imageName4)
        let imageView4 = UIButton()
        imageView4.setImage(image4!, for: .normal)
        imageView4.frame = CGRect(x: 20, y: 338, width: 61, height: 63)
        return imageView4
    }()
    
    private let imageView41: UIButton = {
        let imageName41 = "infop"
        let image41 = UIImage(named: imageName41)
        let imageView41 = UIButton()
        imageView41.setImage(image41!, for: .normal)
        imageView41.frame = CGRect(x: 97, y: 445, width: 260, height: 76)
        return imageView41
    }()
    
    private let imageView42: UIButton = {
        let imageName41 = "infop"
        let image41 = UIImage(named: imageName41)
        let imageView42 = UIButton()
        imageView42.setImage(image41!, for: .normal)
        imageView42.frame = CGRect(x: 97, y: 552, width: 260, height: 76)
        return imageView42
    }()
    
    private let imageView43: UIButton = {
        let imageName41 = "infop"
        let image41 = UIImage(named: imageName41)
        let imageView43 = UIButton()
        imageView43.setImage(image41!, for: .normal)
        imageView43.frame = CGRect(x: 97, y: 659, width: 260, height: 76)
        return imageView43
    }()
    
    private let imageView44: UIButton = {
        let imageName41 = "infop"
        let image41 = UIImage(named: imageName41)
        let imageView44 = UIButton()
        imageView44.setImage(image41!, for: .normal)
        imageView44.frame = CGRect(x: 97, y: 338, width: 260, height: 76)
        return imageView44
    }()
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        LoadAccount()
        let imageName = "frame"
        let image = UIImage(named: imageName)
        let imageView = UIImageView(image: image!)
        imageView.frame = CGRect(x: 133, y: 50, width:128, height: 128)
        view.backgroundColor = .systemBackground
        view.addSubview(imageView)
        
        view.addSubview(imageView41)
        view.addSubview(name)
        view.addSubview(imageView2)
        view.addSubview(imageView42)
        view.addSubview(name1)
        view.addSubview(imageView3)
        view.addSubview(imageView43)
        view.addSubview(name2)
        view.addSubview(imageView4)
        view.addSubview(imageView44)
        view.addSubview(name3)
        view.addSubview(imageView1)
        view.addSubview(top)
        view.addSubview(txt)
        view.addSubview(viewAll)
        view.addSubview(top1)
        viewAll.addTarget(self, action: #selector(didTapView), for: .touchUpInside)
        imageView1.addTarget(self, action: #selector(didTapViewAll), for: .touchUpInside)
        imageView2.addTarget(self, action: #selector(didTapViewAll), for: .touchUpInside)
        imageView3.addTarget(self, action: #selector(didTapViewAll), for: .touchUpInside)
        imageView4.addTarget(self, action: #selector(didTapViewAll), for: .touchUpInside)
        imageView41.addTarget(self, action: #selector(didTapViewAll), for: .touchUpInside)
        imageView42.addTarget(self, action: #selector(didTapViewAll), for: .touchUpInside)
        imageView43.addTarget(self, action: #selector(didTapViewAll), for: .touchUpInside)
        imageView44.addTarget(self, action: #selector(didTapViewAll), for: .touchUpInside)
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        viewAll.frame = CGRect(x: 286, y: 245, width: 90, height: 50)
        top1.frame = CGRect(x: 20, y: 300, width: 97, height: 22)
        txt.frame = CGRect(x: 20, y: 245, width: 260, height: 50)
    }
    
    @objc func didTapViewAll() {
        self.tabBarController!.selectedIndex = 2
        
    }
    
    @objc func didTapView() {
        var s = 0
        var mentior = mentors[0][0]
        if(txt.hasText){
            for mentor in mentors[0] {
                if (mentor.full_name == txt.text) {
                    s = 1
                    mentior = mentor
                    break
                }
            }
            if(s == 1) {
                let fsf = mentior.profile_photo!.components(separatedBy: "/")
                let fsf1 = fsf[3].components(separatedBy: ".")
                print(fsf1)
                let imageName4 = fsf1[0]
                let image4 = UIImage(named: imageName4)
                print(imageName4)
                let imageView4 = UIButton()
                imageView4.setImage(image4!, for: .normal)
                imageView4.frame = CGRect(x: 20, y: 338, width: 61, height: 63)
                imageView4.addTarget(self, action: #selector(didTapViewAll), for: .touchUpInside)
                view.addSubview(imageView4)
                
                imageView41.isHidden = true
                imageView42.isHidden = true
                imageView43.isHidden = true
                
                imageView3.isHidden = true
                imageView1.isHidden = true
                imageView2.isHidden = true
                
                name3.text = mentior.full_name
                name2.text = ""
                name1.text = ""
                name.text = ""
            }
            else {
                let alert = UIAlertController(title: "Notice", message: "There is no such mentor", preferredStyle: .alert)
                alert.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))
                self.present(alert, animated: true, completion: nil)
            }
        }
        else {
            let alert = UIAlertController(title: "Notice", message: "Please fill search bar", preferredStyle: .alert)
            alert.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))
            self.present(alert, animated: true, completion: nil)
        }
        
    }
    
}
