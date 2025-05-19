
            export const queries = {
              // Add queries for each schema type
            
              getSitesettingss: `*[_type == "siteSettings"]`,
              getSitesettingsById: (id) => `*[_type == "siteSettings" && _id == "${id}"][0]`,
                
              getPages: `*[_type == "page"]`,
              getPageById: (id) => `*[_type == "page" && _id == "${id}"][0]`,
                
              getBlogposts: `*[_type == "blogPost"]`,
              getBlogpostById: (id) => `*[_type == "blogPost" && _id == "${id}"][0]`,
                
              getCategorys: `*[_type == "category"]`,
              getCategoryById: (id) => `*[_type == "category" && _id == "${id}"][0]`,
                
              getTags: `*[_type == "tag"]`,
              getTagById: (id) => `*[_type == "tag" && _id == "${id}"][0]`,
                
              getAuthors: `*[_type == "author"]`,
              getAuthorById: (id) => `*[_type == "author" && _id == "${id}"][0]`,
                
              getImagewithalts: `*[_type == "imageWithAlt"]`,
              getImagewithaltById: (id) => `*[_type == "imageWithAlt" && _id == "${id}"][0]`,
                
              getTextimages: `*[_type == "textImage"]`,
              getTextimageById: (id) => `*[_type == "textImage" && _id == "${id}"][0]`,
                
              getFeaturecardss: `*[_type == "featureCards"]`,
              getFeaturecardsById: (id) => `*[_type == "featureCards" && _id == "${id}"][0]`,
                
              getFeaturecards: `*[_type == "featureCard"]`,
              getFeaturecardById: (id) => `*[_type == "featureCard" && _id == "${id}"][0]`,
                
              getFeaturelists: `*[_type == "featureList"]`,
              getFeaturelistById: (id) => `*[_type == "featureList" && _id == "${id}"][0]`,
                
              getFeatures: `*[_type == "feature"]`,
              getFeatureById: (id) => `*[_type == "feature" && _id == "${id}"][0]`,
                
              getFeaturestickys: `*[_type == "featureSticky"]`,
              getFeaturestickyById: (id) => `*[_type == "featureSticky" && _id == "${id}"][0]`,
                
              getBasicforms: `*[_type == "basicForm"]`,
              getBasicformById: (id) => `*[_type == "basicForm" && _id == "${id}"][0]`,
                
              getContactcardss: `*[_type == "contactCards"]`,
              getContactcardsById: (id) => `*[_type == "contactCards" && _id == "${id}"][0]`,
                
              getFaqstickys: `*[_type == "faqSticky"]`,
              getFaqstickyById: (id) => `*[_type == "faqSticky" && _id == "${id}"][0]`,
                
              getFaqs: `*[_type == "faq"]`,
              getFaqById: (id) => `*[_type == "faq" && _id == "${id}"][0]`,
                
              getHomectas: `*[_type == "homeCTA"]`,
              getHomectaById: (id) => `*[_type == "homeCTA" && _id == "${id}"][0]`,
                
              getHighlightrowss: `*[_type == "highlightRows"]`,
              getHighlightrowsById: (id) => `*[_type == "highlightRows" && _id == "${id}"][0]`,
                
              getSignups: `*[_type == "signUp"]`,
              getSignupById: (id) => `*[_type == "signUp" && _id == "${id}"][0]`,
                
              getPricingcolumnss: `*[_type == "pricingColumns"]`,
              getPricingcolumnsById: (id) => `*[_type == "pricingColumns" && _id == "${id}"][0]`,
                
              getPricingplans: `*[_type == "pricingPlan"]`,
              getPricingplanById: (id) => `*[_type == "pricingPlan" && _id == "${id}"][0]`,
                
              getAccordions: `*[_type == "accordion"]`,
              getAccordionById: (id) => `*[_type == "accordion" && _id == "${id}"][0]`,
                
              getAccordionitems: `*[_type == "accordionItem"]`,
              getAccordionitemById: (id) => `*[_type == "accordionItem" && _id == "${id}"][0]`,
                }
