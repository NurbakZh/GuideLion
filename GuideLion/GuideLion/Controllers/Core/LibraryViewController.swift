//
//  LibraryViewController.swift
//  GuideLion
//
//  Created by mac on 09.10.2021.
//

import UIKit

class LibraryViewController: UIViewController {
    
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
    private let name: UILabel = {
        let name = UILabel()
        name.text = "Name"
        name.font = UIFont(name: "AppleSDGothicNeo-Regular", size: 24.0)
        name.textColor = UIColor(red: 0.657, green: 0.671, blue: 0.692, alpha: 1)
        name.frame = CGRect(x: 20, y: 501, width: 350, height: 28)
        return name
    }()
    
    private let mail: UILabel = {
        let mail = UILabel()
        mail.text = "Mail"
        mail.font = UIFont(name: "AppleSDGothicNeo-Regular", size: 24.0)
        mail.textColor = UIColor(red: 0.657, green: 0.671, blue: 0.692, alpha: 1)
        mail.frame = CGRect(x: 20, y: 545, width: 350, height: 28)
        return mail
    }()
    
    private let course: UILabel = {
        let course = UILabel()
        course.text = "Course"
        course.font = UIFont(name: "AppleSDGothicNeo-Regular", size: 24.0)
        course.textColor = UIColor(red: 0.657, green: 0.671, blue: 0.692, alpha: 1)
        course.frame = CGRect(x: 20, y: 589, width: 350, height: 28)
        return course
    }()
    
    private let price: UILabel = {
        let price = UILabel()
        price.text = "Price"
        price.font = UIFont(name: "AppleSDGothicNeo-Regular", size: 24.0)
        price.textColor = UIColor(red: 0.657, green: 0.671, blue: 0.692, alpha: 1)
        price.frame = CGRect(x: 20, y: 633, width: 350, height: 28)
        return price
    }()
    
    private let rating: UILabel = {
        let rating = UILabel()
        rating.text = "Rating"
        rating.font = UIFont(name: "AppleSDGothicNeo-Regular", size: 24.0)
        rating.textColor = UIColor(red: 0.657, green: 0.671, blue: 0.692, alpha: 1)
        rating.frame = CGRect(x: 20, y: 677, width: 350, height: 28)
        return rating
    }()
    
    private let imageView2: UIButton = {
        let imageName2 = "Frame_85"
        let image2 = UIImage(named: imageName2)
        let imageView2 = UIButton()
        imageView2.setImage(image2!,for: .normal)
        imageView2.frame = CGRect(x: 54, y: 245, width:256, height: 256)
        return imageView2
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
        
        
        view.addSubview(imageView2)
        
        view.addSubview(name)
        
        view.addSubview(mail)
        
        view.addSubview(course)
        
        view.addSubview(price)
        
        view.addSubview(rating)
        
        imageView2.addTarget(self, action: #selector(didTapViewAll), for: .touchUpInside)

        
    }
    
    @objc func didTapViewAll() {
        let number = Int.random(in: 0..<4)
        let mentor = mentors[0][number]
        let fsf = mentor.profile_photo!.components(separatedBy: "/")
        let fsf1 = fsf[3].components(separatedBy: ".")
        print(fsf1)
        let imageName4 = fsf1[0]
        let image4 = UIImage(named: imageName4)
        imageView2.setImage(image4!, for: .normal)
        imageView2.addTarget(self, action: #selector(didTapViewAll), for: .touchUpInside)
        name.text = "Name: "+mentor.full_name
        mail.text = "Mail: "+mentor.mail
        course.text = "Course: "+mentor.category
        price.text = "Price: "+String(mentor.price)+"RUB"
        rating.text = "Rating: "+String(mentor.rating)+"/5"
    }
    
    
}
