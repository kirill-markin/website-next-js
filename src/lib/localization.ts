/**
 * Localization utilities for multilingual support
 */

import { Translation } from '@/types/article';

/**
 * List of all supported languages
 */
export const SUPPORTED_LANGUAGES = ['en', 'zh', 'hi', 'es', 'ar'];

/**
 * Default language (used for fallbacks)
 */
export const DEFAULT_LANGUAGE = 'en';

/**
 * Human-readable language names for UI
 */
export const LANGUAGE_NAMES: Record<string, string> = {
    'en': 'English',
    'es': 'Español',
    'zh': '中文',
    'ar': 'العربية',
    'hi': 'हिन्दी',
};

/**
 * Path segment mapping for URLs in different languages
 */
export const PATH_SEGMENTS: Record<string, Record<string, string>> = {
    'articles': {
        'en': 'articles',
        'es': 'articulos',
        'zh': 'zhishi',
        'ar': 'maqalat',
        'hi': 'gyan',
    },
    'services': {
        'en': 'services',
        'es': 'servicios',
        'zh': 'zixun',
        'ar': 'khadamat',
        'hi': 'sevaen',
    },
    'meet': {
        'en': 'meet',
        'es': 'reservar',
        'zh': 'yuyue',
        'ar': 'mawid',
        'hi': 'miliye',
    },
    'pay': {
        'en': 'pay',
        'es': 'pago',
        'zh': 'zhifu',
        'ar': 'dafa',
        'hi': 'bhugtan',
    },
};

/**
 * Sub-path segment mapping for URLs in different languages
 */
export const SUB_PATH_SEGMENTS: Record<string, Record<string, Record<string, string>>> = {
    'meet': {
        'short': {
            'en': 'short',
            'es': 'breve',
            'zh': 'mianfei',
            'ar': 'majani',
            'hi': 'muft'
        },
        'medium': {
            'en': 'medium',
            'es': 'medio',
            'zh': 'zhong',
            'ar': 'mutawassit',
            'hi': 'madhyam'
        },
        'long': {
            'en': 'long',
            'es': 'largo',
            'zh': 'chang',
            'ar': 'tawil',
            'hi': 'lamba'
        },
        'all': {
            'en': 'all',
            'es': 'completo',
            'zh': 'quanbu',
            'ar': 'jamia',
            'hi': 'sabhi'
        }
    },
    'pay': {
        'stripe': {
            'en': 'stripe',
            'es': 'stripe',
            'zh': 'stripe',
            'ar': 'stripe',
            'hi': 'stripe'
        }
    },
    'services': {
        'all': {
            'en': 'all',
            'es': 'todos',
            'zh': 'quanbu',
            'ar': 'jamia',
            'hi': 'sabhi'
        },
        'people': {
            'en': 'people',
            'es': 'personas',
            'zh': 'geren',
            'ar': 'afrad',
            'hi': 'vyakti'
        },
        'business': {
            'en': 'business',
            'es': 'empresas',
            'zh': 'qiye',
            'ar': 'sharikat',
            'hi': 'vyapar'
        },
        'journalists': {
            'en': 'journalists',
            'es': 'medios',
            'zh': 'meiti',
            'ar': 'sahafa',
            'hi': 'media'
        }
    },
    'articles': {
        'productivity': {
            'en': 'productivity',
            'es': 'productividad',
            'zh': '生产效率',
            'ar': 'الإنتاجية',
            'hi': 'उत्पादकता'
        },
        'cursor-ide': {
            'en': 'cursor-ide',
            'es': 'cursor-ide',
            'zh': 'cursor-ide',
            'ar': 'كورسر-آيدي',
            'hi': 'कर्सर-आईडीई'
        },
        'ai': {
            'en': 'ai',
            'es': 'ia',
            'zh': 'ai',
            'ar': 'الذكاء-الاصطناعي',
            'hi': 'एआई'
        },
        'llm': {
            'en': 'llm',
            'es': 'llm',
            'zh': '人工智能',
            'ar': 'نماذج-اللغة-الكبيرة',
            'hi': 'एलएलएम'
        },
        'notion': {
            'en': 'notion',
            'es': 'notion',
            'zh': 'notion',
            'ar': 'نوشن',
            'hi': 'नोशन'
        },
        'task-management': {
            'en': 'task-management',
            'es': 'gestion-tareas',
            'zh': '任务管理',
            'ar': 'ادارة-المهام',
            'hi': 'कार्य-प्रबंधन'
        }
    }
};

/**
 * Get the localized path segment for a specific language
 * @param segment Original segment in English
 * @param language Target language code
 * @returns Localized path segment
 */
export function getPathSegmentByLanguage(
    segment: string,
    language: string
): string {
    // Return original segment for English or if mapping doesn't exist
    if (language === DEFAULT_LANGUAGE || !PATH_SEGMENTS[segment]) {
        return segment;
    }

    return PATH_SEGMENTS[segment]?.[language] || segment;
}

/**
 * Get the localized sub-path segment for a specific language
 * @param mainSegment Original main segment in English (e.g. 'meet')
 * @param subSegment Original sub-segment in English (e.g. 'short')
 * @param language Target language code
 * @returns Localized sub-path segment
 */
export function getSubPathSegmentByLanguage(
    mainSegment: string,
    subSegment: string,
    language: string
): string {
    // Return original sub-segment for English or if mapping doesn't exist
    if (language === DEFAULT_LANGUAGE ||
        !SUB_PATH_SEGMENTS[mainSegment] ||
        !SUB_PATH_SEGMENTS[mainSegment][subSegment]) {
        return subSegment;
    }

    return SUB_PATH_SEGMENTS[mainSegment][subSegment][language] || subSegment;
}

/**
 * Check if translation exists for a specific section
 * @param section Section name (e.g. 'articles', 'services')
 * @param language Target language
 * @returns True if translation exists
 */
export function hasTranslation(
    section: string,
    language: string
): boolean {
    // Base sections are always translated
    if (Object.keys(PATH_SEGMENTS).includes(section)) {
        return true;
    }

    // For other sections, check in translations object
    if (translations[section as keyof typeof translations]) {
        const sectionTranslations = translations[section as keyof typeof translations];
        return language in sectionTranslations;
    }

    return false;
}

/**
 * Get URL for the current page in a different language
 * @param targetLanguage Language to translate URL to
 * @param currentLanguage Current language
 * @param currentPath Current path
 * @param translations Available translations (for articles)
 * @returns URL for the current page in the target language or null if translation not available
 */
export function getUrlForLanguage(
    targetLanguage: string,
    currentLanguage: string,
    currentPath: string,
    translations?: Translation[]
): string | null {
    // Extract query parameters
    const [pathWithoutQuery, queryString] = currentPath.split('?');

    // Parse query parameters if they exist
    const queryParams: Record<string, string> = {};
    if (queryString) {
        queryString.split('&').forEach(param => {
            const [key, value] = param.split('=');
            if (key && value) {
                queryParams[key] = decodeURIComponent(value);
            }
        });
    }

    // Handle category parameter translation if present
    if (queryParams.category) {
        // Known categories in English
        const knownCategories = ['all', 'people', 'business', 'journalists'];

        // Try to find which category this represents in the current language
        let categoryInternalName: string | undefined;

        for (const categoryKey of knownCategories) {
            const localizedCategory = getSubPathSegmentByLanguage('services', categoryKey, currentLanguage);
            if (localizedCategory === queryParams.category) {
                categoryInternalName = categoryKey;
                break;
            }
        }

        // If we found the internal name, translate to target language
        if (categoryInternalName) {
            queryParams.category = getSubPathSegmentByLanguage('services', categoryInternalName, targetLanguage);
        }
    }

    // Handle tag parameter translation if present
    if (queryParams.tag) {
        // Known tags in English (canonical keys)
        const knownTags = Object.keys(SUB_PATH_SEGMENTS['articles'] || {});

        // Try to find which tag this represents in the current language
        let tagInternalName: string | undefined;

        for (const tagKey of knownTags) {
            const localizedTag = getSubPathSegmentByLanguage('articles', tagKey, currentLanguage);
            if (localizedTag === queryParams.tag) {
                tagInternalName = tagKey;
                break;
            }
        }

        // If we found the internal name, translate to target language
        if (tagInternalName) {
            queryParams.tag = getSubPathSegmentByLanguage('articles', tagInternalName, targetLanguage);
        }
    }

    // Rebuild query string with potentially translated parameters
    const newQueryString = Object.keys(queryParams).length > 0
        ? '?' + Object.entries(queryParams)
            .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
            .join('&')
        : '';

    // For specific article pages with translations
    const isArticlePage = Object.values(PATH_SEGMENTS['articles']).some(segment =>
        currentPath.includes(`/${segment}/`) && !currentPath.endsWith(`/${segment}/`));

    if (isArticlePage && translations) {
        // Find the translation for the target language
        const targetTranslation = translations.find(t => t.language === targetLanguage);

        if (targetTranslation) {
            // Article has translation for target language
            const articlesSegment = targetLanguage === DEFAULT_LANGUAGE
                ? 'articles'
                : PATH_SEGMENTS['articles'][targetLanguage];

            return targetLanguage === DEFAULT_LANGUAGE
                ? `/articles/${targetTranslation.slug}/`
                : `/${targetLanguage}/${articlesSegment}/${targetTranslation.slug}/`;
        } else {
            // Article doesn't have translation for target language
            return null; // Return null to hide this language option
        }
    }

    // For index pages and other sections
    const pathSegments = pathWithoutQuery.split('/').filter(Boolean);

    // Check if the first segment is a language prefix
    const firstSegment = pathSegments[0];
    const hasLanguagePrefix = SUPPORTED_LANGUAGES.includes(firstSegment);

    // Determine base path without language prefix
    const basePath = hasLanguagePrefix ? pathSegments.slice(1) : pathSegments;

    if (basePath.length === 0) {
        // This is the home page
        return targetLanguage === DEFAULT_LANGUAGE ? '/' : `/${targetLanguage}/`;
    }

    // Find the segment type by checking all possible localized segments
    let segmentType: string | undefined;
    let segmentIndex = -1;

    for (let i = 0; i < basePath.length; i++) {
        const segment = basePath[i];
        const foundSegmentType = Object.keys(PATH_SEGMENTS).find(key => {
            return Object.values(PATH_SEGMENTS[key]).some(val => val === segment);
        });

        if (foundSegmentType) {
            segmentType = foundSegmentType;
            segmentIndex = i;
            break;
        }
    }

    if (segmentType) {
        // Create the new path with the translated segment
        const newSegment = PATH_SEGMENTS[segmentType][targetLanguage];

        // Handle subsegments if they exist
        if (basePath.length > segmentIndex + 1 && SUB_PATH_SEGMENTS[segmentType]) {
            const currentSubsegment = basePath[segmentIndex + 1];

            // Find which subsegment this matches
            let subsegmentKey: string | undefined;

            for (const subKey of Object.keys(SUB_PATH_SEGMENTS[segmentType])) {
                const subValues = SUB_PATH_SEGMENTS[segmentType][subKey];
                if (Object.values(subValues).some(val => val === currentSubsegment)) {
                    subsegmentKey = subKey;
                    break;
                }
            }

            if (subsegmentKey) {
                // We found a matching subsegment, translate it
                const newSubsegment = getSubPathSegmentByLanguage(segmentType, subsegmentKey, targetLanguage);

                // Get remaining path segments (for future nested paths)
                const remainingPath = basePath.slice(segmentIndex + 2).join('/');
                const remainingWithSlash = remainingPath ? `/${remainingPath}` : '';

                // Form the new path with both translated segment and subsegment
                const newPath = targetLanguage === DEFAULT_LANGUAGE
                    ? `/${newSegment}/${newSubsegment}${remainingWithSlash}/`
                    : `/${targetLanguage}/${newSegment}/${newSubsegment}${remainingWithSlash}/`;

                return newPath + newQueryString;
            }
        }

        // No subsegment found or no match, just use the remaining path as is
        const restOfPath = basePath.slice(segmentIndex + 1).join('/');
        const restWithSlash = restOfPath ? `/${restOfPath}` : '';

        // Form the new path
        const newPath = targetLanguage === DEFAULT_LANGUAGE
            ? `/${newSegment}${restWithSlash}/`
            : `/${targetLanguage}/${newSegment}${restWithSlash}/`;

        return newPath + newQueryString;
    }

    // If we can't determine the path structure, return null to show 404 rather than redirecting
    return null;
}

/**
 * Check if a language is valid and supported
 * @param language Language code to check
 * @returns Whether the language is supported
 */
export function isValidLanguage(language: string): boolean {
    return SUPPORTED_LANGUAGES.includes(language);
}

/**
 * Get locale string for a language (for HTML lang attribute and OpenGraph)
 * @param language Language code
 * @returns Locale string (e.g. 'en_US', 'es_ES')
 */
export function getLocaleForLanguage(language: string): string {
    // Map language codes to specific regional locales for maximum SEO benefit
    // These locale codes improve search engine understanding and regional targeting
    const localeMap: Record<string, string> = {
        'en': 'en_US',
        'es': 'es_ES',
        'zh': 'zh_CN', // Simplified Chinese for mainland China
        'ar': 'ar_SA',
        'hi': 'hi_IN',
    };

    return localeMap[language] || 'en_US';
}

/**
 * All translations for the website
 */
export const translations = {
    common: {
        'en': {
            siteName: 'Kirill Markin | AI Strategy Advisor',
            language: 'English',
            viewAllLink: 'View All',
            dateFormat: {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            },
            aboutAuthor: 'About Author',
        },
        'es': {
            siteName: 'Kirill Markin | Asesor de Estrategia de IA',
            language: 'Español',
            viewAllLink: 'Ver Todo',
            dateFormat: {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            },
            aboutAuthor: 'Sobre el Autor',
        },
        'zh': {
            siteName: 'Kirill Markin | 人工智能战略顾问',
            language: '中文',
            viewAllLink: '查看全部',
            dateFormat: {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            },
            aboutAuthor: '关于作者',
        },
        'ar': {
            siteName: 'Kirill Markin | مستشار استراتيجية الذكاء الاصطناعي',
            language: 'العربية',
            viewAllLink: 'عرض الكل',
            dateFormat: {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            },
            aboutAuthor: 'عن المؤلف',
        },
        'hi': {
            siteName: 'Kirill Markin | एआई रणनीति सलाहकार',
            language: 'हिन्दी',
            viewAllLink: 'सभी देखें',
            dateFormat: {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            },
            aboutAuthor: 'लेखक के बारे में',
        },
    },
    navigation: {
        'en': {
            home: 'Home',
            services: 'SERVICES',
            articles: 'ARTICLES',
            fractionalAICTO: 'FRACTIONAL AI CTO',
            talkToKirill: 'TALK TO KIRILL',
            language: 'English'
        },
        'es': {
            home: 'Inicio',
            services: 'SERVICIOS',
            articles: 'ARTÍCULOS',
            fractionalAICTO: 'CTO DE IA FRACCIONARIO',
            talkToKirill: 'HABLAR CON KIRILL',
            language: 'Español'
        },
        'zh': {
            home: '首页',
            services: '服务项目',
            articles: '专业文章',
            fractionalAICTO: '兼职AI技术总监',
            talkToKirill: '预约咨询',
            language: '中文'
        },
        'ar': {
            home: 'الرئيسية',
            services: 'الخدمات',
            articles: 'المقالات',
            fractionalAICTO: 'مدير تقني ذكي جزئي',
            talkToKirill: 'تحدث مع كيريل',
            language: 'العربية'
        },
        'hi': {
            home: 'होम',
            services: 'सेवाएं',
            articles: 'लेख',
            fractionalAICTO: 'आंशिक AI CTO',
            talkToKirill: 'किरिल से बात करें',
            language: 'हिन्दी'
        },
    },
    personalInfo: {
        'en': {
            jobTitle: 'Founder of ozma.io',
            secondaryTitle: 'Director of R&D',
            tertiaryTitle: 'AI & Data Engineer'
        },
        'es': {
            jobTitle: 'Fundador de ozma.io',
            secondaryTitle: 'Director de I+D',
            tertiaryTitle: 'Ingeniero de IA y Datos'
        },
        'zh': {
            jobTitle: 'ozma.io 创始人',
            secondaryTitle: '研发总监',
            tertiaryTitle: '人工智能与数据工程专家'
        },
        'ar': {
            jobTitle: 'مؤسس ozma.io',
            secondaryTitle: 'مدير البحث والتطوير',
            tertiaryTitle: 'مهندس الذكاء الاصطناعي والبيانات'
        },
        'hi': {
            jobTitle: 'ozma.io के संस्थापक',
            secondaryTitle: 'अनुसंधान एवं विकास निदेशक',
            tertiaryTitle: 'एआई और डेटा इंजीनियर'
        }
    },
    footer: {
        'en': {
            contact: 'Contact',
            social: 'Social',
            media: 'Media',
            other: 'Other',
            talkToKirill: 'Talk to Kirill',
            copyright: '© {year} Kirill Markin',
            socialNetworks: {
                LinkedIn: 'LinkedIn',
                GitHub: 'GitHub',
                Twitter: 'Twitter',
                Facebook: 'Facebook',
                Instagram: 'Instagram',
                Medium: 'Medium',
                YouTube: 'YouTube',
                Reddit: 'Reddit',
                ProductHunt: 'Product Hunt',
                IndieHackers: 'IndieHackers',
                Blog: 'Blog',
                Telegram: 'Telegram',
                WhatsApp: 'WhatsApp',
                GitLab: 'GitLab',
                Bluesky: 'Bluesky',
                Email: 'Email'
            }
        },
        'es': {
            contact: 'Contacto',
            social: 'Social',
            media: 'Medios',
            other: 'Otros',
            talkToKirill: 'Hablar con Kirill',
            copyright: '© {year} Kirill Markin',
            socialNetworks: {
                LinkedIn: 'LinkedIn',
                GitHub: 'GitHub',
                Twitter: 'Twitter',
                Facebook: 'Facebook',
                Instagram: 'Instagram',
                Medium: 'Medium',
                YouTube: 'YouTube',
                Reddit: 'Reddit',
                ProductHunt: 'Product Hunt',
                IndieHackers: 'IndieHackers',
                Blog: 'Blog',
                Telegram: 'Telegram',
                WhatsApp: 'WhatsApp',
                GitLab: 'GitLab',
                Bluesky: 'Bluesky',
                Email: 'Correo'
            }
        },
        'zh': {
            contact: '联系方式',
            social: '社交媒体',
            media: '媒体',
            other: '其他',
            talkToKirill: '与Kirill交流',
            copyright: '© {year} Kirill Markin',
            socialNetworks: {
                LinkedIn: '领英',
                GitHub: 'GitHub',
                Twitter: '推特',
                Facebook: '脸书',
                Instagram: 'Instagram',
                Medium: 'Medium',
                YouTube: '油管',
                Reddit: 'Reddit',
                ProductHunt: 'Product Hunt',
                IndieHackers: 'IndieHackers',
                Blog: '博客',
                Telegram: 'Telegram',
                WhatsApp: 'WhatsApp',
                GitLab: 'GitLab',
                Bluesky: 'Bluesky',
                Email: '邮箱'
            }
        },
        'ar': {
            contact: 'جهات الاتصال',
            social: 'وسائل التواصل',
            media: 'الإعلام',
            other: 'أخرى',
            talkToKirill: 'تحدث مع كيريل',
            copyright: '© {year} كيريل ماركين',
            socialNetworks: {
                LinkedIn: 'لينكد إن',
                GitHub: 'جيثب',
                Twitter: 'تويتر',
                Facebook: 'فيسبوك',
                Instagram: 'انستغرام',
                Medium: 'ميديوم',
                YouTube: 'يوتيوب',
                Reddit: 'ريديت',
                ProductHunt: 'برودكت هانت',
                IndieHackers: 'إندي هاكرز',
                Blog: 'مدونة',
                Telegram: 'تيليجرام',
                WhatsApp: 'واتساب',
                GitLab: 'جيتلاب',
                Bluesky: 'بلوسكاى',
                Email: 'البريد الإلكتروني'
            }
        },
        'hi': {
            contact: 'संपर्क',
            social: 'सामाजिक',
            media: 'मीडिया',
            other: 'अन्य',
            talkToKirill: 'किरिल से बात करें',
            copyright: '© {year} किरिल मार्किन',
            socialNetworks: {
                LinkedIn: 'लिंक्डइन',
                GitHub: 'गिटहब',
                Twitter: 'ट्विटर',
                Facebook: 'फेसबुक',
                Instagram: 'इंस्टाग्राम',
                Medium: 'मीडियम',
                YouTube: 'यूटीउब',
                Reddit: 'रेडिट',
                ProductHunt: 'प्रोडक्ट हंट',
                IndieHackers: 'इंडी हैकर्स',
                Blog: 'ब्लॉग',
                Telegram: 'टेलीग्राम',
                WhatsApp: 'व्हाट्सएप',
                GitLab: 'गिटलैब',
                Bluesky: 'ब्लूस्काई',
                Email: 'ईमेल'
            }
        }
    },
    home: {
        'en': {
            title: 'AI Strategy Advisor | Digital Transformation Expert',
            description: 'Expert in AI implementation strategy for businesses. Specializing in machine learning, data science, and digital transformation to drive innovation and growth.',
            metaTitle: 'Kirill Markin - AI Strategy Advisor | Digital Transformation Expert',
            metaDescription: 'Expert in AI implementation strategy for businesses. Specializing in machine learning, data science, and digital transformation to drive innovation and growth.',
        },
        'es': {
            title: 'Asesor de Estrategia de IA | Transformación Digital',
            description: 'Experto en estrategia de implementación de IA para empresas. Especializado en aprendizaje automático, ciencia de datos y transformación digital para innovación.',
            metaTitle: 'Kirill Markin - Asesor de Estrategia de IA | Transformación Digital',
            metaDescription: 'Experto en estrategia de implementación de IA para empresas. Especializado en aprendizaje automático, ciencia de datos y transformación digital para innovación.',
        },
        'zh': {
            title: '人工智能战略顾问 | 数字化转型专家 | 企业AI解决方案顾问 | 数据科学家',
            description: '企业人工智能实施战略专家，专注于机器学习、大数据分析和数字化转型。为中国企业提供AI解决方案和战略咨询服务，助力创新与业务优化，提升市场竞争力，实现数字化升级与持续发展。我们的顾问团队融合全球经验与本地洞察，帮助企业制定明确可执行的AI战略和实施路线图，确保技术投资获得最大回报并推动长期业务增长。',
            metaTitle: 'Kirill Markin - 人工智能战略顾问 | 数字化转型专家 | 企业AI解决方案顾问 | 数据科学家',
            metaDescription: '企业人工智能实施战略专家，专注于机器学习、大数据分析和数字化转型。为中国企业提供AI解决方案和战略咨询服务，助力创新与业务优化，提升市场竞争力，实现数字化升级与持续发展。我们的顾问团队融合全球经验与本地洞察，帮助企业制定明确可执行的AI战略和实施路线图，确保技术投资获得最大回报并推动长期业务增长。',
        },
        'ar': {
            title: 'مستشار استراتيجية الذكاء الاصطناعي | خبير التحول الرقمي',
            description: 'خبير في استراتيجية تنفيذ الذكاء الاصطناعي للشركات. متخصص في التعلم الآلي وعلوم البيانات والتحول الرقمي لدفع الابتكار والنمو. حلول مبتكرة لتحسين كفاءة الشركات.',
            metaTitle: 'كيريل ماركين - مستشار استراتيجية الذكاء الاصطناعي | خبير التحول الرقمي',
            metaDescription: 'خبير في استراتيجية تنفيذ الذكاء الاصطناعي للشركات. متخصص في التعلم الآلي وعلوم البيانات والتحول الرقمي لدفع الابتكار والنمو. حلول مبتكرة لتحسين كفاءة الشركات.',
        },
        'hi': {
            title: 'एआई रणनीति सलाहकार | डिजिटल परिवर्तन विशेषज्ञ',
            description: 'व्यवसायों के लिए एआई कार्यान्वयन रणनीति में विशेषज्ञ। मशीन लर्निंग, डेटा विज्ञान और डिजिटल परिवर्तन में विशेषज्ञता के साथ नवाचार और विकास के लिए समाधान।',
            metaTitle: 'किरिल मार्किन - एआई रणनीति सलाहकार | डिजिटल परिवर्तन विशेषज्ञ',
            metaDescription: 'व्यवसायों के लिए एआई कार्यान्वयन रणनीति में विशेषज्ञ। मशीन लर्निंग, डेटा विज्ञान और डिजिटल परिवर्तन में विशेषज्ञता के साथ नवाचार और विकास के लिए समाधान।',
        },
    },
    articles: {
        'en': {
            title: 'Articles from Kirill Markin',
            description: 'Expert articles on artificial intelligence, technology, and business strategy',
            metaTitle: 'AI & Technology Articles | Kirill Markin | Machine Learning Expert',
            metaDescription: 'Expert articles on AI, machine learning, and digital transformation. Insights on implementation strategy and emerging technologies from an industry specialist.',
            readTimeText: 'min read',
            all: 'All',
        },
        'es': {
            title: 'Artículos de Kirill Markin',
            description: 'Artículos especializados sobre inteligencia artificial, tecnología y estrategia empresarial',
            metaTitle: 'Artículos de IA y Tecnología | Kirill Markin | Inteligencia Artificial',
            metaDescription: 'Artículos especializados sobre inteligencia artificial, aprendizaje automático y transformación digital. Perspectivas sobre implementación de IA para empresas.',
            readTimeText: 'min de lectura',
            all: 'Todos',
        },
        'zh': {
            title: 'Kirill Markin的文章',
            description: '关于人工智能、技术和商业策略的专业文章，包含深入分析、实施指南和行业趋势。探索最新AI技术应用和成功案例研究，助力您理解人工智能如何为业务创造价值。从基础概念到前沿技术，我们提供全面的AI知识资源。',
            metaTitle: '人工智能与科技文章 | Kirill Markin | 数字化转型与机器学习专家 | 企业AI策略专家',
            metaDescription: '关于人工智能、机器学习和数字化转型的专业文章。为中国企业提供AI实施见解、商业策略分析和新兴技术评估，助力企业数字化转型和提升竞争力，实现持续创新和业务增长。文章涵盖前沿AI应用、最佳实践和案例分析，帮助企业领导者作出明智决策。探索如何利用数据驱动方法解决复杂业务挑战，打造智能化企业生态系统。',
            readTimeText: '分钟阅读',
            all: '全部',
        },
        'ar': {
            title: 'مقالات كيريل ماركين',
            description: 'مقالات متخصصة في الذكاء الاصطناعي والتكنولوجيا واستراتيجية الأعمال',
            metaTitle: 'مقالات الذكاء الاصطناعي والتقنية | كيريل ماركين | خبير التعلم الآلي',
            metaDescription: 'مقالات متخصصة حول الذكاء الاصطناعي والتعلم الآلي والتحول الرقمي. رؤى حول تنفيذ الذكاء الاصطناعي واستراتيجيات الأعمال في العالم العربي والشرق الأوسط.',
            readTimeText: 'دقيقة قراءة',
            all: 'الكل',
        },
        'hi': {
            title: 'किरिल मार्किन के लेख',
            description: 'कृत्रिम बुद्धिमत्ता, प्रौद्योगिकी, और व्यापार रणनीति पर विशेषज्ञ लेख',
            metaTitle: 'एआई और प्रौद्योगिकी लेख | किरिल मार्किन | मशीन लर्निंग विशेषज्ञ',
            metaDescription: 'कृत्रिम बुद्धिमत्ता, मशीन लर्निंग और डिजिटल परिवर्तन पर विशेषज्ञ लेख। भारतीय व्यवसायों के लिए एआई कार्यान्वयन रणनीति पर अंतर्दृष्टि और नवीन तकनीकों का विश्लेषण।',
            readTimeText: 'मिनट पढ़ें',
            all: 'सभी',
        },
    },
    services: {
        'en': {
            title: 'Services',
            description: 'Specialized AI strategy and implementation services for individuals, businesses, and media professionals. From career guidance to enterprise AI transformation, I provide expert solutions tailored to your needs.',
            metaTitle: 'AI Strategy & Implementation Services | Kirill Markin',
            metaDescription: 'Professional AI strategy consulting for businesses. Expert guidance on integrating machine learning and data science to drive growth, efficiency and innovation.',
            serviceCategories: {
                all: 'All Services',
                people: 'For Individuals',
                business: 'For Businesses',
                journalists: 'For Media'
            },
            categoriesLabel: 'Service Categories',
            categoryMetadata: {
                people: {
                    metaTitle: 'AI Services for Individuals | Personal AI Strategy | Kirill Markin',
                    metaDescription: 'Personalized AI consulting for individuals. Career guidance, skill development, and AI implementation for personal projects. Schedule a consultation today.'
                },
                business: {
                    metaTitle: 'AI Services for Businesses | Enterprise AI Strategy | Kirill Markin',
                    metaDescription: 'Comprehensive AI strategy services for businesses. Data analytics solutions, AI integration, and digital transformation expertise for your company.'
                },
                journalists: {
                    metaTitle: 'AI Services for Media | Tech Consultation for Journalists | Kirill',
                    metaDescription: 'Expert AI consultation for media professionals and journalists. Technical information, speaking engagements, and article collaboration on AI topics.'
                }
            }
        },
        'es': {
            title: 'Servicios',
            description: 'Servicios especializados de estrategia e implementación de IA para individuos, empresas y profesionales de los medios. Desde orientación profesional hasta transformación empresarial con IA, ofrezco soluciones expertas adaptadas a sus necesidades.',
            metaTitle: 'Servicios de Estrategia de IA | Transformación Digital | Kirill Markin',
            metaDescription: 'Consultoría profesional de IA para empresas. Integramos inteligencia artificial y ciencia de datos para impulsar innovación y eficiencia en su negocio.',
            serviceCategories: {
                all: 'Todos los Servicios',
                people: 'Para Individuos',
                business: 'Para Empresas',
                journalists: 'Para Medios'
            },
            categoriesLabel: 'Categorías de Servicios',
            categoryMetadata: {
                people: {
                    metaTitle: 'Servicios de IA para Individuos | Estrategia Personal | Kirill Markin',
                    metaDescription: 'Consultoría personalizada de estrategia de IA para individuos. Orientación profesional y desarrollo de habilidades técnicas para proyectos personales.'
                },
                business: {
                    metaTitle: 'Servicios de IA para Empresas | Estrategia Empresarial | Kirill Markin',
                    metaDescription: 'Servicios de estrategia e implementación de IA para empresas. Soluciones de análisis de datos y transformación digital para optimizar procesos empresariales.'
                },
                journalists: {
                    metaTitle: 'Servicios de IA para Medios | Consulta Técnica | Kirill Markin',
                    metaDescription: 'Consultoría experta de IA para medios y periodistas. Información técnica precisa y colaboración en artículos sobre IA y tecnología avanzada.'
                }
            }
        },
        'zh': {
            title: '服务',
            description: '为个人、企业和媒体专业人士提供专业人工智能战略和实施服务。从职业指导到企业AI转型，我提供量身定制的专家解决方案，满足您的需求。',
            metaTitle: '人工智能战略与实施服务 | 数字化转型专家 | 企业AI咨询 | 大数据分析专家 | Kirill Markin',
            metaDescription: '为企业提供专业人工智能战略咨询服务。在人工智能和数据分析领域提供专家指导，帮助提高业务增长和创新能力，实现数字化转型和运营效率提升。我们的专业团队结合全球视野与本地经验，为中国企业提供量身定制的AI解决方案和全面的技术支持。通过数据驱动的方法和创新策略，助力企业在数字时代保持竞争力。',
            serviceCategories: {
                all: '所有服务',
                people: '个人服务',
                business: '企业服务',
                journalists: '媒体服务'
            },
            categoriesLabel: '服务类别',
            categoryMetadata: {
                people: {
                    metaTitle: '个人人工智能服务 | 个人AI战略指导 | 职业发展规划 | 技术技能培训 | Kirill Markin',
                    metaDescription: '为个人提供定制化人工智能战略咨询。职业指导、技术技能发展和个人项目AI实施，帮助您在数字时代获得竞争优势和职业发展机会。我们的专家顾问提供一对一指导，根据您的背景和目标设计个性化学习和发展路径，实现技术和职业双重提升。专业技术培训与顾问服务，助您掌握AI时代必备能力和知识，提升未来竞争力。'
                },
                business: {
                    metaTitle: '企业人工智能服务 | 企业AI战略与数字化转型 | 数据分析解决方案 | Kirill Markin',
                    metaDescription: '为企业提供全面的AI战略和实施服务，涵盖需求分析、系统设计到落地实施的全流程。专注于数据分析解决方案、AI集成和数字化转型，结合机器学习、自然语言处理等前沿技术，帮助企业提升运营效率，实现数据驱动决策。通过行业定制化解决方案和持续优化服务，促进业务创新和可持续增长，确保技术投资转化为可衡量的商业成果。'
                },
                journalists: {
                    metaTitle: '媒体人工智能服务 | 技术咨询与内容合作 | 专业技术解读与深度分析 | Kirill Markin',
                    metaDescription: '为媒体专业人士和记者提供专业AI咨询服务。我们提供关于人工智能和前沿技术的准确专业信息，支持媒体报道和内容创作，提供技术解读、专家观点和深度分析。同时提供专业演讲、技术顾问和文章合作服务，帮助媒体准确传达复杂技术概念，提升内容质量和专业性。我们致力于成为媒体行业值得信赖的技术合作伙伴，为您的报道提供权威支持。'
                }
            }
        },
        'ar': {
            title: 'الخدمات',
            description: 'خدمات متخصصة في استراتيجية وتنفيذ الذكاء الاصطناعي للأفراد والشركات ومحترفي الإعلام. من التوجيه المهني إلى تحول الشركات باستخدام الذكاء الاصطناعي، أقدم حلولًا خبيرة مصممة لتلبية احتياجاتك.',
            metaTitle: 'خدمات استراتيجية الذكاء الاصطناعي | خبير التحول الرقمي | كيريل ماركين',
            metaDescription: 'خدمات استشارية احترافية لاستراتيجية الذكاء الاصطناعي للشركات. إرشادات حول دمج الذكاء الاصطناعي وعلوم البيانات لدفع النمو والابتكار وتحسين الكفاءة التشغيلية.',
            serviceCategories: {
                all: 'جميع الخدمات',
                people: 'للأفراد',
                business: 'للشركات',
                journalists: 'للإعلام'
            },
            categoriesLabel: 'فئات الخدمات',
            categoryMetadata: {
                people: {
                    metaTitle: 'خدمات الذكاء الاصطناعي للأفراد | استراتيجية شخصية | كيريل ماركين',
                    metaDescription: 'استشارات استراتيجية ذكاء اصطناعي مخصصة للأفراد. توجيه مهني وتطوير المهارات التقنية للمشاريع الشخصية وتحسين المسار الوظيفي باستخدام تقنيات الذكاء الاصطناعي.'
                },
                business: {
                    metaTitle: 'خدمات الذكاء الاصطناعي للشركات | استراتيجية مؤسسية | كيريل ماركين',
                    metaDescription: 'خدمات استراتيجية وتنفيذ الذكاء الاصطناعي للشركات. حلول تحليل البيانات وتكامل الذكاء الاصطناعي لتعزيز الابتكار وتحسين الكفاءة التشغيلية في العصر الرقمي.'
                },
                journalists: {
                    metaTitle: 'خدمات الذكاء الاصطناعي للإعلام | استشارات تقنية | كيريل ماركين',
                    metaDescription: 'استشارات خبيرة في الذكاء الاصطناعي للإعلاميين والصحفيين. معلومات تقنية دقيقة حول التكنولوجيا المتقدمة وتعاون في المحتوى المتخصص لتقديم رؤى عن التطورات التقنية.'
                }
            }
        },
        'hi': {
            title: 'सेवाएं',
            description: 'व्यक्तियों, व्यवसायों और मीडिया पेशेवरों के लिए विशेष एआई रणनीति और कार्यान्वयन सेवाएं। करियर मार्गदर्शन से लेकर एआई के साथ व्यापारिक परिवर्तन तक, मैं आपकी जरूरतों के अनुरूप विशेषज्ञ समाधान प्रदान करता हूं। हमारी टीम नवीनतम एआई प्रौद्योगिकियों और व्यावसायिक संदर्भों पर अद्यतित रहती है।',
            metaTitle: 'एआई रणनीति और कार्यान्वयन सेवाएं | डिजिटल परिवर्तन | किरिल मार्किन',
            metaDescription: 'व्यवसायों के लिए पेशेवर एआई रणनीति परामर्श सेवाएं। कृत्रिम बुद्धिमत्ता और डेटा विज्ञान एकीकरण पर मार्गदर्शन जो आपके व्यवसाय में नवाचार और विकास को बढ़ावा देता',
            serviceCategories: {
                all: 'सभी सेवाएं',
                people: 'व्यक्तियों के लिए',
                business: 'व्यवसायों के लिए',
                journalists: 'मीडिया के लिए'
            },
            categoriesLabel: 'सेवा श्रेणियां',
            categoryMetadata: {
                people: {
                    metaTitle: 'व्यक्तियों के लिए एआई सेवाएं | व्यक्तिगत रणनीति | किरिल मार्किन',
                    metaDescription: 'व्यक्तियों के लिए व्यक्तिगत एआई रणनीति परामर्श। करियर मार्गदर्शन और तकनीकी कौशल विकास के लिए विशेषज्ञ सेवाएं। भारतीय प्रौद्योगिकी क्षेत्र के लिए एआई समाधान।'
                },
                business: {
                    metaTitle: 'व्यवसायों के लिए एआई सेवाएं | उद्यम रणनीति | किरिल मार्किन',
                    metaDescription: 'व्यवसायों के लिए एआई रणनीति और कार्यान्वयन सेवाएं। आपकी कंपनी के लिए डेटा विश्लेषण और डिजिटल परिवर्तन विशेषज्ञता जो प्रतिस्पर्धात्मक लाभ प्रदान करती है।'
                },
                journalists: {
                    metaTitle: 'मीडिया के लिए एआई सेवाएं | तकनीकी परामर्श | किरिल मार्किन',
                    metaDescription: 'मीडिया पेशेवरों और पत्रकारों के लिए विशेषज्ञ एआई परामर्श। एआई और प्रौद्योगिकी विषयों पर सटीक तकनीकी जानकारी। विश्वसनीय तकनीकी अंतर्दृष्टि प्राप्त करें।'
                }
            }
        },
    },
    meet: {
        'en': {
            title: 'Meeting Booking Options',
            description: 'Schedule a meeting with AI strategy expert Kirill Markin. Select your preferred meeting type:',
            metaTitle: 'Book a Consultation with AI Expert Kirill Markin | AI Strategy',
            metaDescription: 'Schedule a meeting with AI strategy expert Kirill Markin. Discuss AI implementation, digital transformation, and technology solutions for your business needs.',
            shortMeeting: {
                title: '15-Minute Welcome Meeting',
                description: 'Free introductory consultation to discuss your AI needs and explore potential collaboration opportunities',
                metaTitle: 'Free 15-Minute AI Strategy Consultation | Kirill Markin',
                metaDescription: 'Book a complimentary 15-minute introduction call with AI expert Kirill Markin. Discuss your AI strategy needs and explore collaboration opportunities.'
            },
            mediumMeeting: {
                title: '30-Minute Strategy Session',
                description: 'Focused consultation to discuss your specific AI implementation needs and strategic planning',
                metaTitle: 'Book 30-Minute AI Strategy Session | Kirill Markin',
                metaDescription: 'Schedule a 30-minute AI strategy consultation with expert Kirill Markin. Discuss implementation plans and strategic guidance for your business.'
            },
            longMeeting: {
                title: '60-Minute Deep Dive',
                description: 'Comprehensive consultation for detailed AI strategy planning and implementation roadmap',
                metaTitle: 'Book 60-Minute AI Strategy Deep Dive | Kirill Markin',
                metaDescription: 'Schedule a comprehensive 60-minute AI strategy session with Kirill Markin. In-depth consultation on implementation, planning, and digital transformation.'
            },
            allMeetings: {
                title: 'All Consultation Options',
                description: 'View all available consultation durations and book a time that works for your schedule',
                metaTitle: 'AI Strategy Consultation Options | Kirill Markin | Expert Advice',
                metaDescription: 'Browse all consultation options with AI strategy expert Kirill Markin. Schedule a personalized session on AI implementation and digital transformation.'
            },
            shortPageTitle: '15-MINUTE WELCOME MEETING',
            mediumPageTitle: '30-MINUTE STRATEGY SESSION',
            longPageTitle: '60-MINUTE DEEP DIVE',
            allPageTitle: 'ALL CONSULTATION OPTIONS',
            calendarLoading: 'Loading calendar...'
        },
        'es': {
            title: 'Opciones de Reserva de Reuniones',
            description: 'Programe una reunión con el experto en estrategia de IA Kirill Markin. Seleccione su tipo de reunión preferido:',
            metaTitle: 'Reserve una Consulta con Experto en IA Kirill Markin | Estrategia',
            metaDescription: 'Agende una reunión con el experto en estrategia de IA Kirill Markin. Analice implementación de inteligencia artificial y transformación digital para su empresa.',
            shortMeeting: {
                title: 'Reunión de Bienvenida de 15 Minutos',
                description: 'Consulta introductoria gratuita para discutir sus necesidades de IA y explorar posibles oportunidades de colaboración',
                metaTitle: 'Consulta Gratuita de Estrategia de IA (15 Min) | Kirill Markin',
                metaDescription: 'Reserve una llamada gratuita de 15 minutos con el experto en IA Kirill Markin. Discuta sus necesidades y explore oportunidades de colaboración.',
            },
            mediumMeeting: {
                title: 'Sesión de Estrategia de 30 Minutos',
                description: 'Consulta enfocada para discutir sus necesidades específicas de implementación de IA y planificación estratégica',
                metaTitle: 'Reserve Sesión de Estrategia de IA (30 Min) | Kirill Markin',
                metaDescription: 'Programe una consulta de estrategia de IA de 30 minutos con el experto Kirill Markin. Discuta planes de implementación y orientación estratégica.'
            },
            longMeeting: {
                title: 'Inmersión Profunda de 60 Minutos',
                description: 'Consulta integral para planificación detallada de estrategia de IA y hoja de ruta de implementación',
                metaTitle: 'Reserve Inmersión Profunda de IA (60 Min) | Kirill Markin',
                metaDescription: 'Programe una sesión integral de estrategia de IA de 60 minutos con Kirill Markin. Consulta en profundidad sobre implementación y transformación digital.'
            },
            allMeetings: {
                title: 'Todas las Opciones de Consulta',
                description: 'Vea todas las duraciones de consulta disponibles y reserve un horario que se adapte a su agenda',
                metaTitle: 'Opciones de Consulta de Estrategia de IA | Kirill Markin',
                metaDescription: 'Explore opciones de consulta con el experto en IA Kirill Markin. Programe una sesión personalizada sobre implementación de IA y transformación digital.',
            },
            shortPageTitle: 'REUNIÓN DE BIENVENIDA DE 15 MINUTOS',
            mediumPageTitle: 'SESIÓN DE ESTRATEGIA DE 30 MINUTOS',
            longPageTitle: 'INMERSIÓN PROFUNDA DE 60 MINUTOS',
            allPageTitle: 'TODAS LAS OPCIONES DE CONSULTA',
            calendarLoading: 'Cargando calendario...'
        },
        'zh': {
            title: '会议预约选项',
            description: '与人工智能战略专家Kirill Markin安排会议。选择适合的咨询类型，获取定制化解决方案，推动业务创新与技术实施。',
            metaTitle: '预约人工智能专家咨询 | 定制化AI战略规划与实施服务 | Kirill Markin 专业顾问服务',
            metaDescription: '与AI专家Kirill Markin一对一会议，深入探讨人工智能实施策略与数字化转型方案。专业咨询服务涵盖技术评估、战略规划与实施路径，助力企业实现技术升级与竞争力提升。获取定制化AI解决方案，推动业务创新与可持续发展。我们提供从技术咨询到实施落地的全流程服务，帮助企业构建智能化运营体系，实现降本增效与业务增长。',
            shortMeeting: {
                title: '15分钟欢迎会议',
                description: '15分钟免费咨询，评估AI需求并探索合作机会。初步技术建议助力明确实施方向。',
                metaTitle: '15分钟免费AI战略咨询 | 人工智能专家服务 | 数字化转型解决方案 | Kirill Markin',
                metaDescription: '预约与AI专家Kirill Markin的15分钟免费介绍通话。讨论您的人工智能战略需求，探索合作机会。专业咨询服务，提供中文支持和本地化解决方案，帮助企业实现数字化转型。了解如何将AI技术应用到您的业务中，无需前期投入。我们将评估您的需求，提供针对性建议，助力企业保持竞争优势。'
            },
            mediumMeeting: {
                title: '30分钟战略会议',
                description: '专注讨论您的具体AI实施需求和战略规划的深度咨询',
                metaTitle: '30分钟AI战略咨询 | 人工智能实施规划 | Kirill Markin',
                metaDescription: '预约与AI专家Kirill Markin的30分钟战略咨询。讨论实施计划和战略指导，为您的业务提供专业建议。'
            },
            longMeeting: {
                title: '60分钟深度咨询',
                description: '全面的AI战略规划和实施路线图的综合咨询服务',
                metaTitle: '60分钟AI战略深度咨询 | 综合实施规划 | Kirill Markin',
                metaDescription: '预约与Kirill Markin的60分钟综合AI战略会议。深入咨询实施、规划和数字化转型的全面解决方案。'
            },
            allMeetings: {
                title: '所有咨询选项',
                description: '多种咨询时长选择，深度技术讨论与战略规划，满足不同阶段需求。',
                metaTitle: 'AI战略咨询选项 | 人工智能实施规划 | 数字化转型服务 | 专业技术顾问预约 | Kirill Markin',
                metaDescription: '浏览与AI战略专家Kirill Markin的所有咨询选项。预约关于人工智能实施和数字化转型的个性化会议，获取专业技术解决方案和战略建议。中文服务，专为中国企业设计。我们提供15分钟免费介绍会议，以及30分钟、60分钟和90分钟不同深度的付费咨询服务，满足您从初步了解到深入战略规划的各类需求。'
            },
            shortPageTitle: '15分钟欢迎会议',
            mediumPageTitle: '30分钟战略会议',
            longPageTitle: '60分钟深度咨询',
            allPageTitle: '所有咨询选项',
            calendarLoading: '正在加载日历...'
        },
        'ar': {
            title: 'خيارات حجز الاجتماعات',
            description: 'جدولة اجتماع مع خبير استراتيجية الذكاء الاصطناعي كيريل ماركين. اختر نوع الاجتماع المفضل لديك:',
            metaTitle: 'احجز استشارة مع خبير الذكاء الاصطناعي كيريل ماركين | استراتيجية',
            metaDescription: 'جدولة اجتماع مع خبير استراتيجية الذكاء الاصطناعي كيريل ماركين. ناقش تنفيذ الذكاء الاصطناعي والتحول الرقمي لمشروعك التجاري أو مبادرتك التقنية باللغة العربية.',
            shortMeeting: {
                title: 'اجتماع ترحيبي لمدة 15 دقيقة',
                description: 'استشارة تعريفية مجانية لمناقشة احتياجاتك من الذكاء الاصطناعي واستكشاف فرص التعاون المحتملة',
                metaTitle: 'استشارة مجانية لاستراتيجية الذكاء الاصطناعي (15 دقيقة) | كيريل ماركين',
                metaDescription: 'احجز مكالمة تعريفية مجانية مع خبير الذكاء الاصطناعي كيريل ماركين. ناقش احتياجاتك التقنية واستكشف فرص التعاون المستقبلية في مجال الذكاء الاصطناعي باللغة العربية.'
            },
            mediumMeeting: {
                title: 'جلسة استراتيجية لمدة 30 دقيقة',
                description: 'استشارة مركزة لمناقشة احتياجاتك المحددة لتنفيذ الذكاء الاصطناعي والتخطيط الاستراتيجي',
                metaTitle: 'احجز جلسة استراتيجية للذكاء الاصطناعي (30 دقيقة) | كيريل ماركين',
                metaDescription: 'جدولة استشارة استراتيجية للذكاء الاصطناعي لمدة 30 دقيقة مع الخبير كيريل ماركين. ناقش خطط التنفيذ والتوجيه الاستراتيجي.'
            },
            longMeeting: {
                title: 'غوص عميق لمدة 60 دقيقة',
                description: 'استشارة شاملة للتخطيط المفصل لاستراتيجية الذكاء الاصطناعي وخارطة طريق التنفيذ',
                metaTitle: 'احجز غوص عميق للذكاء الاصطناعي (60 دقيقة) | كيريل ماركين',
                metaDescription: 'جدولة جلسة شاملة لاستراتيجية الذكاء الاصطناعي لمدة 60 دقيقة مع كيريل ماركين. استشارة متعمقة حول التنفيذ والتخطيط والتحول الرقمي.'
            },
            allMeetings: {
                title: 'جميع خيارات الاستشارة',
                description: 'اطلع على جميع مدد الاستشارة المتاحة واحجز وقتًا يناسب جدولك',
                metaTitle: 'خيارات استشارة استراتيجية الذكاء الاصطناعي | كيريل ماركين',
                metaDescription: 'تصفح خيارات الاستشارة المتنوعة مع خبير الذكاء الاصطناعي كيريل ماركين. جدولة جلسة مخصصة حول تنفيذ الذكاء الاصطناعي والتحول الرقمي لمشروعك أو شركتك.'
            },
            shortPageTitle: 'اجتماع ترحيبي لمدة 15 دقيقة',
            mediumPageTitle: 'جلسة استراتيجية لمدة 30 دقيقة',
            longPageTitle: 'غوص عميق لمدة 60 دقيقة',
            allPageTitle: 'جميع خيارات الاستشارة',
            calendarLoading: 'جاري تحميل التقويم...'
        },
        'hi': {
            title: 'मीटिंग बुकिंग विकल्प',
            description: 'एआई रणनीति विशेषज्ञ किरिल मार्किन के साथ मीटिंग शेड्यूल करें। अपना पसंदीदा मीटिंग प्रकार चुनें:',
            metaTitle: 'एआई विशेषज्ञ किरिल मार्किन के साथ परामर्श बुक करें | एआई रणनीति',
            metaDescription: 'एआई रणनीति विशेषज्ञ किरिल मार्किन के साथ मीटिंग शेड्यूल करें। एआई कार्यान्वयन, डिजिटल परिवर्तन और तकनीकी समाधानों पर चर्चा करें। हिंदी में उपलब्ध सेवाएं।',
            shortMeeting: {
                title: '15-मिनट का स्वागत मीटिंग',
                description: 'आपकी एआई आवश्यकताओं पर चर्चा करने और संभावित सहयोग के अवसरों का पता लगाने के लिए मुफ्त परिचयात्मक परामर्श',
                metaTitle: 'मुफ्त 15-मिनट एआई रणनीति परामर्श | प्रौद्योगिकी समाधान | किरिल मार्किन',
                metaDescription: 'एआई विशेषज्ञ किरिल मार्किन के साथ 15-मिनट का मुफ्त परिचयात्मक कॉल बुक करें। अपनी रणनीति आवश्यकताओं पर चर्चा करें और भारतीय व्यवसायों के लिए एआई समाधान खोजें।'
            },
            mediumMeeting: {
                title: '30-मिनट रणनीति सत्र',
                description: 'आपकी विशिष्ट एआई कार्यान्वयन आवश्यकताओं और रणनीतिक योजना पर चर्चा के लिए केंद्रित परामर्श',
                metaTitle: '30-मिनट एआई रणनीति सत्र बुक करें | किरिल मार्किन',
                metaDescription: 'विशेषज्ञ किरिल मार्किन के साथ 30-मिनट का एआई रणनीति परामर्श शेड्यूल करें। कार्यान्वयन योजनाओं और रणनीतिक मार्गदर्शन पर चर्चा करें।'
            },
            longMeeting: {
                title: '60-मिनट गहरी चर्चा',
                description: 'विस्तृत एआई रणनीति योजना और कार्यान्वयन रोडमैप के लिए व्यापक परामर्श',
                metaTitle: '60-मिनट एआई रणनीति गहरी चर्चा बुक करें | किरिल मार्किन',
                metaDescription: 'किरिल मार्किन के साथ 60-मिनट का व्यापक एआई रणनीति सत्र शेड्यूल करें। कार्यान्वयन, योजना और डिजिटल परिवर्तन पर गहन परामर्श।'
            },
            allMeetings: {
                title: 'सभी परामर्श विकल्प',
                description: 'सभी उपलब्ध परामर्श अवधियों को देखें और अपनी समय-सारिणी के अनुसार एक समय बुक करें',
                metaTitle: 'एआई रणनीति परामर्श विकल्प | विशेषज्ञ सलाह | किरिल मार्किन',
                metaDescription: 'एआई विशेषज्ञ किरिल मार्किन के साथ परामर्श विकल्प देखें। कृत्रिम बुद्धिमत्ता कार्यान्वयन पर व्यक्तिगत सत्र शेड्यूल करें। भारतीय व्यवसायों के लिए अनुकूलित सेवाएं।'
            },
            shortPageTitle: '15-मिनट का स्वागत मीटिंग',
            mediumPageTitle: '30-मिनट रणनीति सत्र',
            longPageTitle: '60-मिनट गहरी चर्चा',
            allPageTitle: 'सभी परामर्श विकल्प',
            calendarLoading: 'कैलेंडर लोड हो रहा है...'
        }
    },
    pay: {
        'en': {
            title: 'PAYMENT OPTIONS',
            description: 'Secure payment methods for AI strategy consulting services. Please select your preferred payment option from our globally trusted payment processors to complete your transaction safely.',
            metaTitle: 'Secure Payment Options | AI Consulting Services | Kirill Markin',
            metaDescription: 'Secure payment methods for Kirill Markin\'s AI consulting services. Complete your transaction safely with multiple payment options through trusted platforms.',
            stripe: {
                title: 'Pay with Stripe',
                description: 'Fast and secure payment processing with credit or debit cards via Stripe',
                metaTitle: 'Secure Stripe Payment | AI Consulting Services | Kirill Markin',
                metaDescription: 'Make a secure payment for AI consulting services using Stripe\'s protected payment processing. Pay with credit card or other supported methods.'
            },
            stripePageTitle: 'SECURE PAYMENT WITH STRIPE',
            formLoading: 'Loading secure payment form...'
        },
        'es': {
            title: 'OPCIONES DE PAGO',
            description: 'Métodos de pago seguros para servicios de consultoría de estrategia de IA. Por favor, seleccione su método de pago preferido:',
            metaTitle: 'Opciones de Pago Seguro | Consultoría de IA | Kirill Markin',
            metaDescription: 'Métodos de pago seguros para los servicios de IA de Kirill Markin. Complete su transacción de forma segura con múltiples opciones de pago internacional.',
            stripe: {
                title: 'Pagar con Stripe',
                description: 'Procesamiento de pago rápido y seguro con tarjetas de crédito o débito a través de Stripe',
                metaTitle: 'Pago Seguro con Stripe | Consultoría de IA | Kirill Markin',
                metaDescription: 'Realice un pago seguro por los servicios de consultoría de IA utilizando Stripe. Pague con tarjeta de crédito u otros métodos de pago compatibles.',
            },
            stripePageTitle: 'PAGO SEGURO CON STRIPE',
            formLoading: 'Cargando formulario de pago seguro...'
        },
        'zh': {
            title: '支付选项',
            description: '安全便捷的支付方式，支持国际信用卡与主流电子支付。全程数据加密保障交易安全，即时确认与电子票据服务。',
            metaTitle: '安全支付选项 | 人工智能咨询服务 | 数据加密保护 | 多种支付方式支持 | Kirill Markin',
            metaDescription: 'Kirill Markin人工智能战略咨询服务的安全支付方式。通过多种支付选项安全完成您的AI咨询服务交易，支持国际信用卡和主流电子支付方式。全程数据加密保护，保障交易安全。我们提供清晰透明的定价和详细的电子收据，确保您的支付体验简单便捷。选择我们值得信赖的支付系统，立即获取专业AI咨询服务。',
            stripe: {
                title: '使用Stripe支付',
                description: '通过Stripe使用信用卡或借记卡进行快速安全的支付处理',
                metaTitle: 'Stripe安全支付系统 | 人工智能咨询服务 | 全球支付解决方案 | Kirill Markin',
                metaDescription: '使用Stripe的安全支付系统为AI咨询服务付款。可使用国际信用卡、借记卡或其他支持的支付方式进行安全交易，保障您的支付信息安全。支持多币种结算，便捷高效。全程数据加密保护，确保交易安全可靠。我们提供专业的发票和收据，满足企业和个人需求。Kirill Markin的AI咨询服务值得您的信任与投资。'
            },
            stripePageTitle: '使用STRIPE安全支付',
            formLoading: '正在加载安全支付表单...'
        },
        'ar': {
            title: 'خيارات الدفع',
            description: 'طرق دفع آمنة لخدمات استشارات استراتيجية الذكاء الاصطناعي. يرجى اختيار طريقة الدفع المفضلة لديك:',
            metaTitle: 'خيارات الدفع الآمن | خدمات استشارات الذكاء الاصطناعي | كيريل ماركين',
            metaDescription: 'طرق دفع آمنة لخدمات استراتيجية الذكاء الاصطناعي من كيريل ماركين. أكمل معاملتك بأمان مع خيارات دفع متعددة مدعومة بأحدث تقنيات الحماية وتشفير البيانات.',
            stripe: {
                title: 'الدفع باستخدام Stripe',
                description: 'معالجة دفع سريعة وآمنة باستخدام بطاقات الائتمان أو الخصم عبر Stripe',
                metaTitle: 'دفع آمن عبر Stripe | خدمات استشارات الذكاء الاصطناعي | كيريل ماركين',
                metaDescription: 'قم بإجراء دفع آمن مقابل خدمات الذكاء الاصطناعي باستخدام معالجة الدفع المحمية من Stripe. ادفع ببطاقة الائتمان أو طرق الدفع الأخرى مع ضمان أمان بياناتك المالية.'
            },
            stripePageTitle: 'دفع آمن باستخدام STRIPE',
            formLoading: 'جاري تحميل نموذج الدفع الآمن...'
        },
        'hi': {
            title: 'भुगतान विकल्प',
            description: 'एआई रणनीति परामर्श सेवाओं के लिए सुरक्षित भुगतान विधियां। कृपया अपनी पसंदीदा भुगतान विधि चुनें:',
            metaTitle: 'सुरक्षित भुगतान विकल्प | एआई परामर्श सेवाएं | किरिल मार्किन',
            metaDescription: 'किरिल मार्किन की एआई रणनीति सेवाओं के लिए सुरक्षित भुगतान विधियां। कई विकल्पों के साथ लेनदेन सुरक्षित रूप से पूरा करें। भारतीय और अंतरराष्ट्रीय विकल्प।',
            stripe: {
                title: 'Stripe से भुगतान करें',
                description: 'Stripe के माध्यम से क्रेडिट या डेबिट कार्ड से तेज़ और सुरक्षित भुगतान प्रक्रिया',
                metaTitle: 'Stripe से सुरक्षित भुगतान | एआई परामर्श सेवाएं | किरिल मार्किन',
                metaDescription: 'Stripe के सुरक्षित भुगतान प्रसंस्करण का उपयोग करके एआई परामर्श सेवाओं के लिए भुगतान करें। क्रेडिट कार्ड या अन्य भुगतान विधियों से सुरक्षित लेनदेन प्रोसेस करें।'
            },
            stripePageTitle: 'STRIPE से सुरक्षित भुगतान करें',
            formLoading: 'सुरक्षित भुगतान फॉर्म लोड हो रहा है...'
        }
    },
    subscribe: {
        'en': {
            title: 'Subscribe to My Brain Dumps',
            description: 'I write about AI, tech, and whatever else catches my attention. No corporate BS, no weekly promises I can\'t keep. Just real insights when I actually have something interesting to share.',
            metaTitle: 'Subscribe to AI Strategy Updates | Kirill Markin Newsletter',
            metaDescription: 'Subscribe to Kirill Markin\'s newsletter for AI strategy insights, emerging technology trends, and practical tools. Expert content for professionals.',
            benefits: {
                title: 'What You\'ll Actually Get:',
                items: [
                    'AI insights when I discover something genuinely useful',
                    'Early access to articles before I post them everywhere',
                    'Practical tools I actually use (not just recommend)',
                    'Honest takes on AI trends, including the overhyped ones',
                    'Real case studies from projects that didn\'t explode'
                ]
            },
            form: {
                emailPlaceholder: 'Your email (for the occasional brain dump)',
                subscribeButton: 'Subscribe',
                loadingText: 'Adding you to the list...',
                successMessage: 'Welcome aboard! I\'ll send you something when I have actual news.',
                errorMessage: 'Something broke. Try again?',
                validationError: 'That doesn\'t look like an email address',
                privacyNote: 'I respect your privacy. Unsubscribe anytime without drama.'
            }
        }
    },
    emailPopup: {
        'en': {
            title: 'Join My Brain Dumps',
            description: 'I share AI insights and practical tools when I find something actually useful',
            ctaButton: 'Subscribe',
            subText: 'Only when my brain produces something useful',
            successMessage: 'Welcome! I\'ll email you when I have actual news',
            errorMessage: 'Something broke. Try again?',
            validationError: 'That doesn\'t look like an email'
        },
        'es': {
            title: 'Únete a Mis Derrames Cerebrales',
            description: 'Comparto ideas de IA y herramientas cuando encuentro algo realmente útil',
            ctaButton: 'Suscribirse',
            subText: 'Solo cuando mi cerebro produce algo útil',
            successMessage: '¡Bienvenido! Te escribiré cuando tenga noticias de verdad',
            errorMessage: 'Algo se rompió. ¿Intentamos otra vez?',
            validationError: 'Eso no parece un email'
        },
        'zh': {
            title: '加入我的大脑垃圾场',
            description: '当我发现真正有用的东西时，我会分享AI见解和实用工具',
            ctaButton: '订阅',
            subText: '只在我的大脑产出有用东西时',
            successMessage: '欢迎！有真正的消息时我会邮件联系你',
            errorMessage: '出故障了，再试一次？',
            validationError: '这看起来不像邮箱地址'
        },
        'ar': {
            title: 'انضم إلى مقالب دماغي',
            description: 'أشارك رؤى الذكاء الاصطناعي والأدوات عندما أجد شيئًا مفيدًا فعلاً',
            ctaButton: 'اشترك',
            subText: 'فقط عندما ينتج دماغي شيئًا مفيدًا',
            successMessage: 'أهلاً بك! سأراسلك عندما يكون لدي أخبار حقيقية',
            errorMessage: 'شيء ما تعطل. نحاول مرة أخرى؟',
            validationError: 'هذا لا يبدو كعنوان بريد إلكتروني'
        },
        'hi': {
            title: 'मेरे दिमागी कचरे में शामिल हों',
            description: 'जब मुझे कुछ वास्तव में उपयोगी मिलता है तो मैं AI अंतर्दृष्टि और उपकरण साझा करता हूं',
            ctaButton: 'सब्स्क्राइब करें',
            subText: 'केवल जब मेरा दिमाग कुछ उपयोगी बनाता है',
            successMessage: 'स्वागत है! जब मेरे पास असली खबर होगी तो मैं ईमेल करूंगा',
            errorMessage: 'कुछ टूट गया। फिर कोशिश करें?',
            validationError: 'यह ईमेल पता नहीं लग रहा'
        }
    },
    notFound: {
        'en': {
            title: 'Page Not Found',
            message: 'The page you\'re looking for doesn\'t exist or has been moved. You might want to explore our articles on AI strategy or check our services instead.',
            backToHome: 'BACK TO HOME'
        },
        'es': {
            title: 'Página No Encontrada',
            message: 'La página que estás buscando no existe o ha sido movida. Tal vez quieras explorar nuestros artículos sobre estrategia de IA o consultar nuestros servicios.',
            backToHome: 'VOLVER AL INICIO'
        },
        'zh': {
            title: '页面未找到',
            message: '请求的页面不存在或已移动。推荐浏览最新人工智能战略文章或查看专业服务方案。',
            backToHome: '返回首页'
        },
        'ar': {
            title: 'الصفحة غير موجودة',
            message: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها. قد ترغب في استكشاف مقالاتنا حول استراتيجية الذكاء الاصطناعي أو الاطلاع على خدماتنا بدلاً من ذلك.',
            backToHome: 'العودة إلى الصفحة الرئيسية'
        },
        'hi': {
            title: 'पृष्ठ नहीं मिला',
            message: 'आप जिस पृष्ठ की तलाश कर रहे हैं वह मौजूद नहीं है या स्थानांतरित कर दिया गया है। आप हमारे एआई रणनीति पर लेख या हमारी सेवाओं को देखना चाह सकते हैं।',
            backToHome: 'मुख्य पृष्ठ पर वापस जाएं'
        }
    },
} as const;

/**
 * Type for translation section keys
 */
export type TranslationSection = keyof typeof translations;

/**
 * Get translations for a specific section and language
 * @param section Section name (e.g. 'common', 'home', 'articles')
 * @param language Language code
 * @returns Translation object for the requested section, falling back to default language
 */
export function getTranslation<T extends TranslationSection>(section: T, language: string): typeof translations[T][typeof DEFAULT_LANGUAGE] {
    if (!translations[section]) {
        // If section doesn't exist, return empty object
        // Using explicit type casting with as unknown for safe conversion
        return {} as unknown as typeof translations[T][typeof DEFAULT_LANGUAGE];
    }

    const sectionTranslations = translations[section];
    return (sectionTranslations[language as keyof typeof sectionTranslations] ||
        sectionTranslations[DEFAULT_LANGUAGE]) as typeof translations[T][typeof DEFAULT_LANGUAGE];
} 