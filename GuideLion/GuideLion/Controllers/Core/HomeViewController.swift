//
//  ViewController.swift
//  GuideLion
//
//  Created by mac on 08.10.2021.
//

import UIKit

class HomeViewController: UIViewController {
    
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
    
    private let reg: UILabel = {
        let reg = UILabel()
        reg.textColor = UIColor(red: 0.114, green: 0.208, blue: 0.341, alpha: 1)
        reg.font = UIFont(name: "AppleSDGothicNeo-Regular", size: 17.0)
        return reg
    }()
    
    private let fin: UILabel = {
        let fin = UILabel()
        fin.attributedText = NSMutableAttributedString(string: "Find your mentor \nhere", attributes: [NSAttributedString.Key.kern: 0.36])
        fin.lineBreakMode = .byWordWrapping
        fin.numberOfLines = 2
        fin.textColor = UIColor(red: 0.114, green: 0.208, blue: 0.341, alpha: 1)
        fin.font = UIFont(name: "AppleSDGothicNeo-Regular", size: 28.0)
        return fin
    }()
    
    private let txt: UITextField = {
        let txt = UITextField()
        txt.attributedPlaceholder = NSAttributedString(string: "Search by name",
                                                        attributes: [NSAttributedString.Key.foregroundColor: UIColor(red: 0.657, green: 0.671, blue: 0.692, alpha: 1)])
        txt.textColor = UIColor(red: 0.197, green: 0.236, blue: 0.292, alpha: 1)
        txt.setLeftPaddingPoints(16)
        txt.setRightPaddingPoints(16)
        txt.autocapitalizationType = .none
        txt.font = UIFont(name: "AppleSDGothicNeo-Medium", size: 20.0)
        txt.layer.cornerRadius = 15
        txt.layer.compositingFilter = "multiplyBlendMode"
        txt.layer.borderWidth = 2
        txt.layer.borderColor = UIColor(red: 0.0, green: 0.8, blue: 0.9, alpha: 1.0).cgColor
        return txt
    }()
    
    private let pop: UILabel = {
        let pop = UILabel()
        pop.text = "Popular Categories"
        pop.textColor = UIColor(red: 0.657, green: 0.671, blue: 0.692, alpha: 1)
        pop.font = UIFont(name: "AppleSDGothicNeo-Regular", size: 17.0)
        return pop
    }()
    
    private let top: UILabel = {
        let top = UILabel()
        top.text = "Top Mentors"
        top.textColor = UIColor(red: 0.657, green: 0.671, blue: 0.692, alpha: 1)
        top.font = UIFont(name: "AppleSDGothicNeo-Regular", size: 17.0)
        return top
    }()
    
    private let viewAll: UIButton = {
        let viewAll = UIButton()
        viewAll.setTitle("View All", for: .normal)
        viewAll.titleLabel?.font =  UIFont(name: "AppleSDGothicNeo-Regular", size: 17)
        viewAll.setTitleColor(UIColor(red: 0.15, green: 0.496, blue: 0.988, alpha: 1), for: .normal)
        return viewAll
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        LoadAccount()
        view.backgroundColor = .systemBackground
        let imageName = "lupa"
        let image = UIImage(named: imageName)
        let imageView = UIButton()
        imageView.setImage(image!, for: .normal)
        imageView.frame = CGRect(x: 252, y: 95, width: 150.6, height: 166.5)
        view.addSubview(imageView)
        
        let imageName1 = "manage"
        let image1 = UIImage(named: imageName1)
        let imageView1 = UIButton()
        imageView1.setImage(image1!, for: .normal)
        imageView1.frame = CGRect(x: 212, y: 420, width: 176, height: 106)
        view.addSubview(imageView1)
        
        let imageName2 = "enter"
        let image2 = UIImage(named: imageName2)
        let imageView2 = UIButton()
        imageView2.setImage(image2!, for: .normal)
        imageView2.frame = CGRect(x: 20, y: 420, width: 176, height: 106)
        view.addSubview(imageView2)
        
        let imageName3 = "ux"
        let image3 = UIImage(named: imageName3)
        let imageView3 = UIButton()
        imageView3.setImage(image3!, for: .normal)
        imageView3.frame = CGRect(x: 20, y: 298, width: 176, height: 106)
        view.addSubview(imageView3)
        
        let imageName4 = "song"
        let image4 = UIImage(named: imageName4)
        let imageView4 = UIButton()
        imageView4.setImage(image4!, for: .normal)
        imageView4.frame = CGRect(x: 212, y: 298, width: 176, height: 106)
        view.addSubview(imageView4)
        
        let imageName5 = "9"
        let image5 = UIImage(named: imageName5)
        let imageView5 = UIButton()
        imageView5.setImage(image5!, for: .normal)
        imageView5.frame = CGRect(x: 20, y: 576, width: 167, height: 180)
        view.addSubview(imageView5)
        
        let lb1 = UILabel()
        lb1.layer.backgroundColor = UIColor(red: 0.945, green: 0.98, blue: 0.933, alpha: 1).cgColor
        lb1.alpha = 0.9
        lb1.text = "Vlad Zharov"
        lb1.font = UIFont(name: "AppleSDGothicNeo-Regular", size: 12.0)
        lb1.frame = CGRect(x: 20, y: 590, width: 114, height: 20)
        view.addSubview(lb1)
        
        let imageName6 = "9"
        let image6 = UIImage(named: imageName6)
        let imageView6 = UIButton()
        imageView6.setImage(image6!, for: .normal)
        imageView6.frame = CGRect(x: 203, y: 576, width: 167, height: 180)
        view.addSubview(imageView6)
        
        let lb2 = UILabel()
        lb2.layer.backgroundColor = UIColor(red: 0.945, green: 0.98, blue: 0.933, alpha: 1).cgColor
        lb2.alpha = 0.9
        lb2.text = "Nurbek Zhomartov"
        lb2.font = UIFont(name: "AppleSDGothicNeo-Regular", size: 12.0)
        lb2.frame = CGRect(x: 203, y: 590, width: 114, height: 20)
        view.addSubview(lb2)
        
        view.addSubview(reg)
        view.addSubview(fin)
        view.addSubview(txt)
        view.addSubview(pop)
        view.addSubview(top)
        view.addSubview(viewAll)
        viewAll.addTarget(self, action: #selector(didTapViewAll), for: .touchUpInside)
        imageView.addTarget(self, action: #selector(didTapViewAll), for: .touchUpInside)
        imageView1.addTarget(self, action: #selector(didTapViewAll), for: .touchUpInside)
        imageView2.addTarget(self, action: #selector(didTapViewAll), for: .touchUpInside)
        imageView3.addTarget(self, action: #selector(didTapViewAll), for: .touchUpInside)
        imageView4.addTarget(self, action: #selector(didTapViewAll), for: .touchUpInside)
        imageView5.addTarget(self, action: #selector(didTapViewAll), for: .touchUpInside)
        imageView6.addTarget(self, action: #selector(didTapViewAll), for: .touchUpInside)
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        let full = your_property.components(separatedBy: " ")
        reg.text = "Hey,"+full[0]
        reg.frame = CGRect(x: 20, y: 84, width: 78, height: 22)
        fin.frame = CGRect(x: 20, y: 122, width: 309, height: 78)
        txt.frame = CGRect(x: 20, y: 210, width: 251, height: 42)
        pop.frame = CGRect(x: 20, y: 268, width: 144, height: 22)
        top.frame = CGRect(x: 20, y: 542, width: 97, height: 22)
        viewAll.frame = CGRect(x: 313, y: 542, width: 81, height: 22)
    }
    
    @objc func didTapViewAll() {
        self.tabBarController!.selectedIndex = 1
        
    }
    
}

