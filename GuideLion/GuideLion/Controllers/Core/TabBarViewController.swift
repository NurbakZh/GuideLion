//
//  TabBarViewController.swift
//  GuideLion
//
//  Created by mac on 09.10.2021.
//

import UIKit

class TabBarViewController: UITabBarController {
    
    let your_property : String

    init(your_property: String) {
       self.your_property = your_property
       super.init(nibName: nil, bundle: nil)
    }
    required init?(coder: NSCoder) {
        fatalError("init(coder:) is not supported")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        let vc1 = HomeViewController(your_property: your_property)
        let vc2 = SearchViewController(your_property: your_property)
        let vc3 = LibraryViewController(your_property: your_property)
        
        vc1.navigationItem.largeTitleDisplayMode = .always
        vc3.navigationItem.largeTitleDisplayMode = .always
        
        vc2.title = "Research Mentors"
        vc3.title = "Mentor"
        
        let nav1 = UINavigationController(rootViewController: vc1)
        let nav2 = UINavigationController(rootViewController: vc2)
        let nav3 = UINavigationController(rootViewController: vc3)
        
        nav1.tabBarItem = UITabBarItem(title: "", image: UIImage(systemName: "globe"), selectedImage: UIImage(systemName: "globe"))
        nav2.tabBarItem = UITabBarItem(title: "", image: UIImage(systemName: "magnifyingglass"), tag: 1)
        nav3.tabBarItem = UITabBarItem(title: "", image: UIImage(systemName: "person"), selectedImage: UIImage(systemName: "person"))
        
        nav1.navigationBar.prefersLargeTitles = true
        nav2.navigationBar.prefersLargeTitles = true
        nav3.navigationBar.prefersLargeTitles = true
        
        setViewControllers([nav1,nav2,nav3], animated: false)
    }
    
}
