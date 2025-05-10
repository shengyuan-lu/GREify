// vocabularyData.js - GRE vocabulary with definitions and common word replacements
const greVocabulary = {
	"abound": {
		"definition": "to exist in large numbers or quantities",
		"replaces": ["flourish", "teem", "thrive"]
	},
	"adulterate": {
		"definition": "to make impure by adding inferior or foreign elements",
		"replaces": ["contaminate", "taint", "corrupt", "debase"]
	},
	"abate": {
		"definition": "to become less intense or widespread",
		"replaces": ["diminish", "subside", "wane", "decrease"]
	},
	"abstain": {
		"definition": "to refrain from doing something, especially by one's own choice",
		"replaces": ["refrain", "withhold", "forgo", "desist"]
	},
	"aloof": {
		"definition": "not friendly or forthcoming; cool and distant",
		"replaces": ["distant", "detached", "reserved", "indifferent"]
	},
	"admonish": {
		"definition": "to warn or reprimand someone firmly",
		"replaces": ["caution", "reprove", "rebuke", "chide"]
	},
	"appease": {
		"definition": "to pacify or placate by acceding to demands",
		"replaces": ["placate", "mollify", "assuage", "conciliate"]
	},
	"accentuate": {
		"definition": "to emphasize or make more noticeable",
		"replaces": ["emphasize", "highlight", "stress", "underscore"]
	},
	"boorish": {
		"definition": "rough and bad-mannered; coarse",
		"replaces": ["crude", "uncouth", "rude", "vulgar"]
	},
	"acumen": {
		"definition": "the ability to make good judgments and quick decisions",
		"replaces": ["shrewdness", "astuteness", "insight", "perception"]
	},
	"amorphous": {
		"definition": "without a clearly defined shape or form",
		"replaces": ["shapeless", "formless", "nebulous", "undefined"]
	},
	"advocate": {
		"definition": "to publicly recommend or support",
		"replaces": ["support", "champion", "endorse", "promote"]
	},
	"abjure": {
		"definition": "to renounce or reject solemnly",
		"replaces": ["renounce", "reject", "forsake", "recant"]
	},
	"approbation": {
		"definition": "approval or praise",
		"replaces": ["approval", "commendation", "praise", "endorsement"]
	},
	"clangor": {
		"definition": "a loud resonant sound; clang",
		"replaces": ["din", "clang", "clamor", "racket"]
	},
	"aesthetic": {
		"definition": "concerned with beauty or the appreciation of beauty",
		"replaces": ["artistic", "tasteful", "beautiful", "decorative"]
	},
	"arbitrary": {
		"definition": "based on random choice or personal whim, rather than reason or system",
		"replaces": ["random", "capricious", "subjective", "whimsical"]
	},
	"conjectural": {
		"definition": "based on incomplete information; hypothetical",
		"replaces": ["speculative", "hypothetical", "theoretical", "unproven"]
	},
	"brook": {
		"definition": "to tolerate or allow (something)",
		"replaces": ["tolerate", "endure", "allow", "permit"]
	},
	"antithesis": {
		"definition": "a person or thing that is the direct opposite of someone or something else",
		"replaces": ["opposite", "contrast", "contrary", "reverse"]
	},
	"austere": {
		"definition": "severe or strict in manner, attitude, or appearance",
		"replaces": ["severe", "stern", "strict", "harsh"]
	},
	"aggrandize": {
		"definition": "to increase the power, status, or wealth of",
		"replaces": ["enhance", "elevate", "exalt", "magnify"]
	},
	"anomalous": {
		"definition": "deviating from what is standard, normal, or expected",
		"replaces": ["abnormal", "irregular", "unusual", "atypical"]
	},
	"cherish": {
		"definition": "to hold dear; feel love for",
		"replaces": ["treasure", "value", "adore", "prize"]
	},
	"conventional": {
		"definition": "based on or in accordance with what is generally done or believed",
		"replaces": ["traditional", "standard", "ordinary", "customary"]
	},
	"affectation": {
		"definition": "behavior, speech, or writing that is artificial and designed to impress",
		"replaces": ["pretense", "pose", "artifice", "mannerism"]
	},
	"archaic": {
		"definition": "very old or old-fashioned",
		"replaces": ["ancient", "obsolete", "antiquated", "outdated"]
	},
	"convivial": {
		"definition": "friendly, lively, and enjoyable",
		"replaces": ["sociable", "festive", "jovial", "genial"]
	},
	"circumspect": {
		"definition": "careful to consider all circumstances and possible consequences",
		"replaces": ["cautious", "wary", "prudent", "careful"]
	},
	"ascribe": {
		"definition": "to attribute something to a cause",
		"replaces": ["attribute", "assign", "credit", "impute"]
	},
	"belie": {
		"definition": "to fail to give a true impression of something",
		"replaces": ["contradict", "misrepresent", "disguise", "falsify"]
	},
	"alacrity": {
		"definition": "brisk and cheerful readiness",
		"replaces": ["eagerness", "enthusiasm", "willingness", "readiness"]
	},
	"antipathy": {
		"definition": "a deep-seated feeling of dislike; aversion",
		"replaces": ["aversion", "hostility", "animosity", "antagonism"]
	},
	"corroborate": {
		"definition": "to confirm or give support to a statement, theory, or finding",
		"replaces": ["confirm", "verify", "substantiate", "validate"]
	},
	"debunk": {
		"definition": "to expose the falseness or hollowness of a myth, idea, or belief",
		"replaces": ["disprove", "refute", "discredit", "expose"]
	},
	"alleviate": {
		"definition": "to make suffering, deficiency, or a problem less severe",
		"replaces": ["relieve", "ease", "mitigate", "lessen"]
	},
	"clamorous": {
		"definition": "making a loud and confused noise",
		"replaces": ["noisy", "vociferous", "boisterous", "strident"]
	},
	"decadent": {
		"definition": "characterized by or reflecting a state of moral or cultural decline",
		"replaces": ["degenerate", "corrupt", "dissolute", "self-indulgent"]
	},
	"comity": {
		"definition": "courtesy and considerate behavior toward others",
		"replaces": ["courtesy", "civility", "harmony", "amity"]
	},
	"befuddled": {
		"definition": "unable to think clearly; confused",
		"replaces": ["confused", "bewildered", "perplexed", "disoriented"]
	},
	"capricious": {
		"definition": "given to sudden and unaccountable changes of mood or behavior",
		"replaces": ["fickle", "unpredictable", "whimsical", "erratic"]
	},
	"ambivalent": {
		"definition": "having mixed feelings or contradictory ideas about something",
		"replaces": ["conflicted", "uncertain", "indecisive", "torn"]
	},
	"arcane": {
		"definition": "understood by few; mysterious or secret",
		"replaces": ["esoteric", "obscure", "cryptic", "mysterious"]
	},
	"disparate": {
		"definition": "essentially different in kind; not allowing comparison",
		"replaces": ["dissimilar", "different", "contrasting", "divergent"]
	},
	"diminutive": {
		"definition": "extremely or unusually small",
		"replaces": ["tiny", "small", "miniature", "minute"]
	},
	"analogous": {
		"definition": "comparable in certain respects, typically in a way that makes clearer the nature of the things compared",
		"replaces": ["similar", "comparable", "parallel", "corresponding"]
	},
	"dearth": {
		"definition": "a scarcity or lack of something",
		"replaces": ["scarcity", "shortage", "lack", "deficiency"]
	},
	"egregious": {
		"definition": "outstandingly bad; shocking",
		"replaces": ["flagrant", "glaring", "blatant", "atrocious"]
	},
	"commensurate": {
		"definition": "corresponding in size or degree; in proportion",
		"replaces": ["proportionate", "equivalent", "equal", "corresponding"]
	},
	"eschew": {
		"definition": "deliberately avoid using; abstain from",
		"replaces": ["avoid", "shun", "abstain from", "forgo"]
	},
	"cerebral": {
		"definition": "intellectual rather than emotional or physical",
		"replaces": ["intellectual", "scholarly", "academic", "rational"]
	},
	"ameliorate": {
		"definition": "to make something bad or unsatisfactory better",
		"replaces": ["improve", "enhance", "better", "upgrade"]
	},
	"arduous": {
		"definition": "involving or requiring strenuous effort; difficult and tiring",
		"replaces": ["difficult", "strenuous", "laborious", "demanding"]
	},
	"emulate": {
		"definition": "to match or surpass (a person or achievement), typically by imitation",
		"replaces": ["imitate", "copy", "mimic", "follow"]
	},
	"discernible": {
		"definition": "able to be discerned; perceptible",
		"replaces": ["noticeable", "perceptible", "detectable", "observable"]
	},
	"bolster": {
		"definition": "to support or strengthen",
		"replaces": ["strengthen", "reinforce", "support", "fortify"]
	},
	"explicable": {
		"definition": "capable of being explained or accounted for",
		"replaces": ["explainable", "understandable", "comprehensible", "fathomable"]
	},
	"evanescent": {
		"definition": "soon passing out of sight, memory, or existence; quickly fading or disappearing",
		"replaces": ["fleeting", "transient", "momentary", "ephemeral"]
	},
	"cordial": {
		"definition": "warm and friendly",
		"replaces": ["friendly", "warm", "genial", "affable"]
	},
	"esoteric": {
		"definition": "intended for or likely to be understood by only a small number of people with a specialized knowledge or interest",
		"replaces": ["obscure", "arcane", "abstruse", "recondite"]
	},
	"congenial": {
		"definition": "pleasant or agreeable because suited to one's taste or inclination",
		"replaces": ["agreeable", "pleasant", "compatible", "harmonious"]
	},
	"amenable": {
		"definition": "open and responsive to suggestion; easily persuaded or controlled",
		"replaces": ["receptive", "responsive", "compliant", "agreeable"]
	},
	"artless": {
		"definition": "without guile or deception; natural and sincere",
		"replaces": ["naive", "guileless", "ingenuous", "sincere"]
	},
	"enervate": {
		"definition": "to cause (someone) to feel drained of energy or vitality",
		"replaces": ["weaken", "debilitate", "exhaust", "drain"]
	},
	"enigmatic": {
		"definition": "difficult to interpret or understand; mysterious",
		"replaces": ["mysterious", "puzzling", "cryptic", "perplexing"]
	},
	"chauvinistic": {
		"definition": "displaying excessive or prejudiced loyalty or support for a particular group or cause",
		"replaces": ["prejudiced", "biased", "bigoted", "jingoistic"]
	},
	"hyperbole": {
		"definition": "exaggerated statements or claims not meant to be taken literally",
		"replaces": ["exaggeration", "overstatement", "embellishment", "amplification"]
	},
	"flamboyant": {
		"definition": "tending to attract attention because of their exuberance, confidence, and stylishness",
		"replaces": ["showy", "ostentatious", "extravagant", "flashy"]
	},
	"deleterious": {
		"definition": "causing harm or damage",
		"replaces": ["harmful", "damaging", "detrimental", "injurious"]
	},
	"evasive": {
		"definition": "tending to avoid commitment or self-revelation, especially by responding with generalities",
		"replaces": ["elusive", "ambiguous", "noncommittal", "vague"]
	},
	"conspicuous": {
		"definition": "standing out so as to be clearly visible; attracting notice or attention",
		"replaces": ["noticeable", "obvious", "evident", "prominent"]
	},
	"anachronistic": {
		"definition": "belonging to a period other than that being portrayed",
		"replaces": ["outdated", "obsolete", "outmoded", "antiquated"]
	},
	"ascetic": {
		"definition": "characterized by severe self-discipline and abstention from all forms of indulgence",
		"replaces": ["austere", "severe", "strict", "spartan"]
	},
	"ephemeral": {
		"definition": "lasting for a very short time",
		"replaces": ["transient", "fleeting", "momentary", "short-lived"]
	},
	"estranged": {
		"definition": "no longer close or affectionate to someone; alienated",
		"replaces": ["alienated", "separated", "detached", "distant"]
	},
	"connoisseur": {
		"definition": "an expert judge in matters of taste",
		"replaces": ["expert", "specialist", "authority", "aficionado"]
	},
	"immutable": {
		"definition": "unchanging over time or unable to be changed",
		"replaces": ["unchangeable", "permanent", "fixed", "constant"]
	},
	"forestall": {
		"definition": "to prevent or obstruct by taking advance action",
		"replaces": ["prevent", "preempt", "thwart", "avert"]
	},
	"dichotomy": {
		"definition": "a division or contrast between two things that are or are represented as being opposed or entirely different",
		"replaces": ["division", "separation", "opposition", "contrast"]
	},
	"exculpate": {
		"definition": "to show or declare that someone is not guilty of wrongdoing",
		"replaces": ["absolve", "clear", "vindicate", "acquit"]
	},
	"cursory": {
		"definition": "hasty and therefore not thorough or detailed",
		"replaces": ["superficial", "hasty", "brief", "perfunctory"]
	},
	"audacious": {
		"definition": "showing a willingness to take surprisingly bold risks",
		"replaces": ["bold", "daring", "fearless", "intrepid"]
	},
	"assuage": {
		"definition": "to make an unpleasant feeling less intense",
		"replaces": ["alleviate", "ease", "relieve", "soothe"]
	},
	"fervid": {
		"definition": "intensely enthusiastic or passionate, especially to an excessive degree",
		"replaces": ["passionate", "ardent", "intense", "zealous"]
	},
	"extravagant": {
		"definition": "lacking restraint in spending money or using resources",
		"replaces": ["excessive", "lavish", "wasteful", "immoderate"]
	},
	"dissemble": {
		"definition": "to conceal or disguise one's true feelings or beliefs",
		"replaces": ["conceal", "disguise", "hide", "mask"]
	},
	"indefatigable": {
		"definition": "persisting tirelessly",
		"replaces": ["tireless", "untiring", "unflagging", "persistent"]
	},
	"gainsay": {
		"definition": "to deny or contradict",
		"replaces": ["deny", "contradict", "dispute", "oppose"]
	},
	"edify": {
		"definition": "to instruct or improve (someone) morally or intellectually",
		"replaces": ["enlighten", "educate", "inform", "instruct"]
	},
	"expedite": {
		"definition": "to make an action or process happen sooner or be accomplished more quickly",
		"replaces": ["accelerate", "hasten", "speed up", "facilitate"]
	},
	"daunting": {
		"definition": "seeming difficult to deal with in anticipation; intimidating",
		"replaces": ["intimidating", "formidable", "challenging", "overwhelming"]
	},
	"avaricious": {
		"definition": "having or showing an extreme greed for wealth or material gain",
		"replaces": ["greedy", "covetous", "acquisitive", "rapacious"]
	},
	"betray": {
		"definition": "to expose to danger by treacherously giving information to an enemy",
		"replaces": ["deceive", "double-cross", "sell out", "desert"]
	},
	"garrulous": {
		"definition": "excessively talkative, especially on trivial matters",
		"replaces": ["talkative", "chatty", "loquacious", "verbose"]
	},
	"fanciful": {
		"definition": "overimaginative and unrealistic",
		"replaces": ["whimsical", "imaginative", "fantastical", "dreamy"]
	},
	"dogged": {
		"definition": "having or showing tenacity and grim persistence",
		"replaces": ["persistent", "tenacious", "stubborn", "determined"]
	},
	"indolent": {
		"definition": "wanting to avoid activity or exertion; lazy",
		"replaces": ["lazy", "idle", "slothful", "lethargic"]
	},
	"galvanize": {
		"definition": "shock or excite (someone) into taking action",
		"replaces": ["stimulate", "spur", "energize", "motivate"]
	},
	"elicit": {
		"definition": "to evoke or draw out (a response, answer, or fact)",
		"replaces": ["draw out", "extract", "evoke", "provoke"]
	},
	"fastidious": {
		"definition": "very attentive to and concerned about accuracy and detail",
		"replaces": ["meticulous", "particular", "fussy", "exacting"]
	},
	"deify": {
		"definition": "to worship or regard as a god",
		"replaces": ["worship", "idolize", "revere", "venerate"]
	},
	"banal": {
		"definition": "so lacking in originality as to be obvious and boring",
		"replaces": ["trite", "clichéd", "commonplace", "hackneyed"]
	},
	"bucolic": {
		"definition": "relating to the pleasant aspects of the countryside and country life",
		"replaces": ["rural", "pastoral", "rustic", "countryside"]
	},
	"incendiary": {
		"definition": "tending to stir up conflict or hostility; inflammatory",
		"replaces": ["inflammatory", "provocative", "agitating", "revolutionary"]
	},
	"frivolous": {
		"definition": "not having any serious purpose or value",
		"replaces": ["trivial", "silly", "superficial", "pointless"]
	},
	"dupe": {
		"definition": "to deceive; trick",
		"replaces": ["deceive", "trick", "fool", "mislead"]
	},
	"insular": {
		"definition": "ignorant of or uninterested in cultures, ideas, or peoples outside one's own experience",
		"replaces": ["isolated", "detached", "provincial", "narrow-minded"]
	},
	"indiscriminate": {
		"definition": "done at random or without careful judgment",
		"replaces": ["random", "haphazard", "unselective", "arbitrary"]
	},
	"erudite": {
		"definition": "having or showing great knowledge or learning",
		"replaces": ["scholarly", "learned", "knowledgeable", "intellectual"]
	},
	"feign": {
		"definition": "to pretend to be affected by (a feeling, state, or injury)",
		"replaces": ["pretend", "fake", "simulate", "affect"]
	}
	"didactic": {
		"definition": "intended to teach or instruct; morally instructive",
		"replaces": ["educational", "instructive", "pedagogical"]
	},
	"benign": {
		"definition": "gentle and kind; not harmful or malicious",
		"replaces": ["harmless", "favorable", "gentle"]
	},
	"burgeon": {
		"definition": "to grow or develop rapidly",
		"replaces": ["flourish", "expand", "proliferate"]
	},
	"inimical": {
		"definition": "hostile or unfriendly; adverse",
		"replaces": ["antagonistic", "harmful", "unfavorable"]
	},
	"heterogeneous": {
		"definition": "diverse in character or content; composed of different elements",
		"replaces": ["diverse", "varied", "mixed"]
	},
	"empirical": {
		"definition": "based on observation or experience rather than theory",
		"replaces": ["experiential", "observable", "factual"]
	},
	"intransigent": {
		"definition": "unwilling to compromise; stubborn",
		"replaces": ["inflexible", "unyielding", "obstinate"]
	},
	"innocuous": {
		"definition": "not harmful or offensive; harmless",
		"replaces": ["harmless", "inoffensive", "benign"]
	},
	"fecund": {
		"definition": "intellectually productive; fertile",
		"replaces": ["fertile", "productive", "fruitful"]
	},
	"furtive": {
		"definition": "attempting to avoid notice or attention; secretive",
		"replaces": ["secretive", "stealthy", "sly"]
	},
	"disseminate": {
		"definition": "to spread widely; to diffuse",
		"replaces": ["distribute", "circulate", "propagate"]
	},
	"brazen": {
		"definition": "bold and without shame; brassy",
		"replaces": ["shameless", "bold", "audacious"]
	},
	"cacophonous": {
		"definition": "involving or producing harsh, discordant sounds",
		"replaces": ["dissonant", "jarring", "discordant"]
	},
	"intimate": {
		"definition": "closely acquainted; private and personal; to suggest or hint",
		"replaces": ["suggest", "imply", "personal"]
	},
	"imperious": {
		"definition": "arrogantly domineering or overbearing",
		"replaces": ["domineering", "commanding", "dictatorial"]
	},
	"engender": {
		"definition": "to cause or give rise to",
		"replaces": ["produce", "generate", "create"]
	},
	"intrepid": {
		"definition": "fearless; adventurous",
		"replaces": ["fearless", "brave", "dauntless"]
	},
	"momentary": {
		"definition": "lasting for a very short time; brief",
		"replaces": ["brief", "fleeting", "temporary"]
	},
	"feeble": {
		"definition": "lacking physical strength; weak",
		"replaces": ["weak", "frail", "puny"]
	},
	"hamper": {
		"definition": "to impede or hinder",
		"replaces": ["hinder", "impede", "obstruct"]
	},
	"feasible": {
		"definition": "capable of being done or carried out",
		"replaces": ["possible", "practical", "viable"]
	},
	"calumny": {
		"definition": "a false statement made to injure another's reputation",
		"replaces": ["slander", "defamation", "libel"]
	},
	"canonize": {
		"definition": "to treat as sacred; to glorify",
		"replaces": ["sanctify", "glorify", "idolize"]
	},
	"invigorate": {
		"definition": "to give energy or strength to",
		"replaces": ["energize", "stimulate", "revitalize"]
	},
	"impertinent": {
		"definition": "rude and not showing proper respect; irrelevant",
		"replaces": ["insolent", "rude", "impudent"]
	},
	"entitled": {
		"definition": "believing oneself to be inherently deserving of privileges",
		"replaces": ["privileged", "deserving", "rightful"]
	},
	"irreverent": {
		"definition": "showing a lack of respect for people or things that are generally respected",
		"replaces": ["disrespectful", "impious", "sacrilegious"]
	},
	"mundane": {
		"definition": "lacking interest or excitement; commonplace",
		"replaces": ["ordinary", "commonplace", "banal"]
	},
	"felicitous": {
		"definition": "well-chosen or suited to the circumstances; apt",
		"replaces": ["apt", "appropriate", "fitting"]
	},
	"indispensable": {
		"definition": "absolutely necessary",
		"replaces": ["essential", "necessary", "vital"]
	},
	"flout": {
		"definition": "to openly disregard a rule or convention",
		"replaces": ["defy", "disregard", "scorn"]
	},
	"candid": {
		"definition": "truthful and straightforward; frank",
		"replaces": ["frank", "honest", "forthright"]
	},
	"censure": {
		"definition": "to express severe disapproval of",
		"replaces": ["condemn", "criticize", "denounce"]
	},
	"mitigate": {
		"definition": "to make less severe or intense",
		"replaces": ["alleviate", "reduce", "lessen"]
	},
	"invasive": {
		"definition": "tending to spread very quickly; intruding on others' privacy",
		"replaces": ["intrusive", "encroaching", "aggressive"]
	},
	"pertinacious": {
		"definition": "holding firmly to a belief or purpose; stubborn",
		"replaces": ["persistent", "tenacious", "stubborn"]
	},
	"loathe": {
		"definition": "to feel intense dislike or disgust for",
		"replaces": ["detest", "hate", "abhor"]
	},
	"nettlesome": {
		"definition": "causing irritation or annoyance",
		"replaces": ["annoying", "irritating", "vexing"]
	},
	"forbear": {
		"definition": "to refrain from doing something",
		"replaces": ["abstain", "refrain", "withhold"]
	},
	"lament": {
		"definition": "to express sorrow or regret for",
		"replaces": ["mourn", "grieve", "bemoan"]
	},
	"homogeneous": {
		"definition": "of the same kind; uniform in structure",
		"replaces": ["uniform", "consistent", "similar"]
	},
	"castigate": {
		"definition": "to criticize or punish severely",
		"replaces": ["chastise", "rebuke", "reprimand"]
	},
	"chicanery": {
		"definition": "the use of trickery to achieve a political, financial, or legal purpose",
		"replaces": ["deception", "trickery", "fraud"]
	},
	"obsolete": {
		"definition": "no longer in use or no longer useful",
		"replaces": ["outdated", "antiquated", "archaic"]
	},
	"irresolute": {
		"definition": "showing or feeling hesitancy; uncertain",
		"replaces": ["hesitant", "indecisive", "vacillating"]
	},
	"presumptuous": {
		"definition": "failing to observe the limits of what is permitted or appropriate",
		"replaces": ["arrogant", "forward", "impertinent"]
	},
	"malign": {
		"definition": "to speak harmful untruths about; slander",
		"replaces": ["defame", "slander", "vilify"]
	},
	"nullify": {
		"definition": "to make legally null and void; invalidate",
		"replaces": ["invalidate", "cancel", "void"]
	},
	"haphazard": {
		"definition": "lacking any obvious principle of organization",
		"replaces": ["random", "chaotic", "disorganized"]
	},
	"myopic": {
		"definition": "lacking foresight or intellectual insight",
		"replaces": ["shortsighted", "narrow-minded", "limited"]
	},
	"humdrum": {
		"definition": "lacking excitement; dull",
		"replaces": ["boring", "monotonous", "routine"]
	},
	"caustic": {
		"definition": "sarcastic in a scathing and bitter way",
		"replaces": ["biting", "acerbic", "scathing"]
	},
	"coalesce": {
		"definition": "to come together to form one mass or whole",
		"replaces": ["merge", "unite", "combine"]
	},
	"opaque": {
		"definition": "not able to be seen through; obscure",
		"replaces": ["unclear", "obscure", "ambiguous"]
	},
	"laudable": {
		"definition": "deserving praise and commendation",
		"replaces": ["praiseworthy", "commendable", "admirable"]
	},
	"probity": {
		"definition": "the quality of having strong moral principles; honesty and decency",
		"replaces": ["integrity", "honesty", "righteousness"]
	},
	"malleable": {
		"definition": "easily influenced; pliable",
		"replaces": ["pliable", "adaptable", "flexible"]
	},
	"obviate": {
		"definition": "to remove a need or difficulty",
		"replaces": ["prevent", "eliminate", "preclude"]
	},
	"hodgepodge": {
		"definition": "a confused mixture",
		"replaces": ["jumble", "medley", "mixture"]
	},
	"nonchalant": {
		"definition": "appearing casually calm and relaxed",
		"replaces": ["casual", "indifferent", "blasé"]
	},
	"insipid": {
		"definition": "lacking flavor; bland or uninteresting",
		"replaces": ["bland", "dull", "tasteless"]
	},
	"construe": {
		"definition": "to interpret in a particular way",
		"replaces": ["interpret", "understand", "analyze"]
	},
	"cogent": {
		"definition": "clear, logical, and convincing",
		"replaces": ["compelling", "persuasive", "convincing"]
	},
	"paradigmatic": {
		"definition": "serving as a typical example of something",
		"replaces": ["typical", "exemplary", "representative"]
	},
	"lax": {
		"definition": "not sufficiently strict or careful",
		"replaces": ["loose", "negligent", "slack"]
	},
	"proliferate": {
		"definition": "to increase rapidly in number; multiply",
		"replaces": ["multiply", "spread", "increase"]
	},
	"neophyte": {
		"definition": "a person who is new to a subject or activity",
		"replaces": ["beginner", "novice", "amateur"]
	},
	"omnipresent": {
		"definition": "widely or constantly encountered",
		"replaces": ["ubiquitous", "pervasive", "universal"]
	},
	"impede": {
		"definition": "to delay or prevent by creating obstacles",
		"replaces": ["hinder", "obstruct", "block"]
	},
	"partial": {
		"definition": "favoring one person or side over another; incomplete",
		"replaces": ["biased", "incomplete", "fragmentary"]
	},
	"loquacious": {
		"definition": "tending to talk a great deal; garrulous",
		"replaces": ["talkative", "garrulous", "verbose"]
	},
	"contrite": {
		"definition": "feeling or expressing remorse",
		"replaces": ["remorseful", "penitent", "repentant"]
	},
	"compelling": {
		"definition": "evoking interest or attention in a powerful way",
		"replaces": ["forceful", "persuasive", "engaging"]
	},
	"pedantic": {
		"definition": "overly concerned with formalism or precision",
		"replaces": ["fussy", "dogmatic", "nitpicking"]
	},
	"marginalize": {
		"definition": "to treat a person or group as insignificant",
		"replaces": ["sideline", "exclude", "alienate"]
	},
	"specious": {
		"definition": "superficially plausible but actually wrong",
		"replaces": ["deceptive", "misleading", "fallacious"]
	},
	"plastic": {
		"definition": "capable of being shaped or molded",
		"replaces": ["malleable", "adaptable", "pliable"]
	},
	"oust": {
		"definition": "to drive out or expel",
		"replaces": ["expel", "remove", "depose"]
	},
	"impetuous": {
		"definition": "acting suddenly with little thought or care",
		"replaces": ["impulsive", "rash", "hasty"]
	},
	"pensive": {
		"definition": "engaged in deep or serious thought",
		"replaces": ["thoughtful", "reflective", "contemplative"]
	},
	"misanthropic": {
		"definition": "disliking humankind and avoiding human society",
		"replaces": ["cynical", "antisocial", "reclusive"]
	},
	"convoluted": {
		"definition": "extremely complex and difficult to follow",
		"replaces": ["complex", "complicated", "intricate"]
	},
	"contend": {
		"definition": "to assert something as a position in an argument; to compete",
		"replaces": ["argue", "claim", "maintain"]
	},
	"placid": {
		"definition": "not easily upset or excited; calm and peaceful",
		"replaces": ["calm", "serene", "tranquil"]
	},
	"panache": {
		"definition": "flamboyant confidence of style or manner",
		"replaces": ["flair", "style", "verve"]
	},
	"spurious": {
		"definition": "not genuine, authentic, or true",
		"replaces": ["fake", "counterfeit", "false"]
	},
	"platitude": {
		"definition": "a remark or statement that has been used too often to be interesting",
		"replaces": ["cliché", "truism", "banality"]
	},
	"palpable": {
		"definition": "able to be touched or felt; obvious",
		"replaces": ["tangible", "perceptible", "evident"]
	},
	"irascible": {
		"definition": "having or showing a tendency to be easily angered",
		"replaces": ["irritable", "quick-tempered", "touchy"]
	},
	"portend": {
		"definition": "to be a sign or warning of",
		"replaces": ["foretell", "presage", "foreshadow"]
	},
	"misnomer": {
		"definition": "a wrong or inaccurate name or designation",
		"replaces": ["misname", "mislabel", "misnaming"]
	},
	"covet": {
		"definition": "to yearn to possess something belonging to another",
		"replaces": ["desire", "crave", "envy"]
	},
	"copious": {
		"definition": "abundant in supply or quantity",
		"replaces": ["abundant", "plentiful", "ample"]
	},
	"polemical": {
		"definition": "relating to or involving strongly critical or disputatious writing or speech",
		"replaces": ["controversial", "argumentative", "disputatious"]
	},
	"plodding": {
		"definition": "slow-moving and unexciting",
		"replaces": ["tedious", "laborious", "slow"]
	},
	"subjective": {
		"definition": "based on personal feelings or opinions rather than facts",
		"replaces": ["personal", "biased", "individual"]
	},
	"prescient": {
		"definition": "having knowledge of events before they take place",
		"replaces": ["foresighted", "prophetic", "visionary"]
	},
	"perfidy": {
		"definition": "deceitfulness; untrustworthiness",
		"replaces": ["treachery", "betrayal", "disloyalty"]
	},
	"mercenary": {
		"definition": "primarily concerned with making money at the expense of ethics",
		"replaces": ["greedy", "avaricious", "venal"]
	},
	"provincial": {
		"definition": "having or showing the manners, viewpoints, etc., considered characteristic of unsophisticated inhabitants of a province",
		"replaces": ["parochial", "narrow-minded", "unsophisticated"]
	},
	"negligent": {
		"definition": "failing to take proper care over something",
		"replaces": ["careless", "remiss", "lax"]
	},
	"craven": {
		"definition": "contemptibly lacking in courage; cowardly",
		"replaces": ["cowardly", "pusillanimous", "spineless"]
	},
	"cosmopolitan": {
		"definition": "including people from many different countries; sophisticated",
		"replaces": ["worldly", "sophisticated", "urbane"]
	},
	"precipitate": {
		"definition": "to cause to happen suddenly or unexpectedly; hasty",
		"replaces": ["hasty", "sudden", "abrupt"]
	},
	"prosaic": {
		"definition": "lacking imagination; dull and commonplace",
		"replaces": ["mundane", "ordinary", "unimaginative"]
	},
	"subvert": {
		"definition": "to undermine the power and authority of an established system",
		"replaces": ["undermine", "overthrow", "destabilize"]
	},
	"pristine": {
		"definition": "in its original condition; unspoiled",
		"replaces": ["immaculate", "unspoiled", "perfect"]
	},
	"profuse": {
		"definition": "abundant or copious",
		"replaces": ["abundant", "plentiful", "lavish"]
	},
	"meticulous": {
		"definition": "showing great attention to detail; very careful and precise",
		"replaces": ["careful", "precise", "thorough"]
	},
	"rudimentary": {
		"definition": "involving or limited to basic principles; elementary",
		"replaces": ["basic", "elementary", "primitive"]
	},
	"obsequious": {
		"definition": "obedient or attentive to an excessive degree",
		"replaces": ["servile", "fawning", "sycophantic"]
	},
	"decorum": {
		"definition": "behavior in keeping with good taste and propriety",
		"replaces": ["propriety", "etiquette", "politeness"]
	},
	"deference": {
		"definition": "humble submission and respect",
		"replaces": ["respect", "reverence", "submission"]
	},
	"profundity": {
		"definition": "great depth of insight or knowledge",
		"replaces": ["depth", "wisdom", "insight"]
	},
	"remedial": {
		"definition": "giving or intended as a remedy or cure",
		"replaces": ["corrective", "therapeutic", "curative"]
	},
	"timorous": {
		"definition": "showing or suffering from nervousness or fear",
		"replaces": ["fearful", "timid", "apprehensive"]
	},
	"reproach": {
		"definition": "to express disapproval or disappointment",
		"replaces": ["rebuke", "admonish", "scold"]
	},
	"pugnacious": {
		"definition": "eager or quick to argue, quarrel, or fight",
		"replaces": ["combative", "aggressive", "belligerent"]
	},
	"mordant": {
		"definition": "having or showing a sharp or critical quality",
		"replaces": ["caustic", "biting", "scathing"]
	},
	"salutary": {
		"definition": "producing good effects; beneficial",
		"replaces": ["beneficial", "helpful", "wholesome"]
	},
	"placate": {
		"definition": "to make someone less angry or hostile",
		"replaces": ["appease", "pacify", "mollify"]
	},
	"deft": {
		"definition": "demonstrating skill and cleverness",
		"replaces": ["skillful", "adroit", "nimble"]
	},
	"desultory": {
		"definition": "lacking a plan or purpose; occurring randomly",
		"replaces": ["random", "aimless", "disconnected"]
	},
	"prophetic": {
		"definition": "accurately predicting what will happen in the future",
		"replaces": ["predictive", "prescient", "foreshadowing"]
	},
	"restive": {
		"definition": "impatient or uneasy under control",
		"replaces": ["restless", "unruly", "fidgety"]
	},
	"tortuous": {
		"definition": "full of twists and turns; excessively complicated",
		"replaces": ["winding", "twisting", "convoluted"]
	},
	"robust": {
		"definition": "strong and healthy; vigorous",
		"replaces": ["strong", "vigorous", "sturdy"]
	},
	"sagacious": {
		"definition": "having or showing keen discernment and good judgment",
		"replaces": ["wise", "perceptive", "astute"]
	},
	"outstrip": {
		"definition": "to exceed or surpass",
		"replaces": ["surpass", "exceed", "outdo"]
	},
	"sever": {
		"definition": "to divide by cutting or slicing; to end a relationship",
		"replaces": ["cut", "disconnect", "separate"]
	},
	"proclivity": {
		"definition": "a natural inclination or tendency",
		"replaces": ["tendency", "inclination", "predisposition"]
	},
	"demur": {
		"definition": "to raise objections or show reluctance",
		"replaces": ["object", "hesitate", "protest"]
	},
	"diffident": {
		"definition": "modest or shy because of a lack of self-confidence",
		"replaces": ["shy", "timid", "hesitant"]
	},
	"prudent": {
		"definition": "acting with or showing care and thought for the future",
		"replaces": ["cautious", "careful", "sensible"]
	},
	"sporadic": {
		"definition": "occurring at irregular intervals or only in a few places",
		"replaces": ["intermittent", "occasional", "irregular"]
	},
	"tractable": {
		"definition": "easily managed or controlled",
		"replaces": ["manageable", "docile", "compliant"]
	},
	"salubrious": {
		"definition": "health-giving; healthy",
		"replaces": ["healthy", "wholesome", "beneficial"]
	},
	"sanguine": {
		"definition": "optimistic or positive, especially in a difficult situation",
		"replaces": ["optimistic", "hopeful", "confident"]
	},
	"precarious": {
		"definition": "not securely held or in position; dangerously likely to fall or collapse",
		"replaces": ["unstable", "dangerous", "risky"]
	},
	"slight": {
		"definition": "small in degree; inconsiderable",
		"replaces": ["minor", "small", "insignificant"]
	},
	"puerile": {
		"definition": "childishly silly and immature",
		"replaces": ["childish", "immature", "juvenile"]
	},
	"derivative": {
		"definition": "imitative of the work of another artist, writer, etc.",
		"replaces": ["unoriginal", "imitative", "copied"]
	},
	"dilatory": {
		"definition": "slow to act; intended to cause delay",
		"replaces": ["delaying", "procrastinating", "tardy"]
	},
	"punctilious": {
		"definition": "showing great attention to detail or correct behavior",
		"replaces": ["meticulous", "exact", "precise"]
	},
	"stigmatize": {
		"definition": "to describe or identify in opprobrious terms",
		"replaces": ["condemn", "brand", "label"]
	},
	"transient": {
		"definition": "lasting only for a short time; impermanent",
		"replaces": ["temporary", "fleeting", "brief"]
	},
	"sanction": {
		"definition": "to authorize, approve, or allow; or a penalty for disobeying a law",
		"replaces": ["approve", "authorize", "permit"]
	},
	"scant": {
		"definition": "barely sufficient or adequate",
		"replaces": ["minimal", "insufficient", "meager"]
	},
	"quirky": {
		"definition": "having peculiar or unexpected traits",
		"replaces": ["eccentric", "unusual", "odd"]
	},
	"somnolent": {
		"definition": "sleepy, drowsy",
		"replaces": ["drowsy", "sleepy", "lethargic"]
	},
	"quixotic": {
		"definition": "exceedingly idealistic; unrealistic and impractical",
		"replaces": ["idealistic", "impractical", "romantic"]
	},
	"desiccate": {
		"definition": "to remove the moisture from; to make dry",
		"replaces": ["dry out", "dehydrate", "parch"]
	},
	"equivocate": {
		"definition": "to use ambiguous language to conceal the truth",
		"replaces": ["prevaricate", "hedge", "evade"]
	},
	"recondite": {
		"definition": "difficult to understand; abstruse",
		"replaces": ["obscure", "abstruse", "esoteric"]
	},
	"undermine": {
		"definition": "to weaken gradually or insidiously",
		"replaces": ["sabotage", "weaken", "subvert"]
	},
	"ubiquitous": {
		"definition": "present, appearing, or found everywhere",
		"replaces": ["omnipresent", "pervasive", "universal"]
	},
	"sedulous": {
		"definition": "showing dedication and diligence",
		"replaces": ["diligent", "assiduous", "industrious"]
	},
	"skullduggery": {
		"definition": "underhanded or unscrupulous behavior",
		"replaces": ["trickery", "deception", "intrigue"]
	},
	"repudiate": {
		"definition": "to refuse to accept; to reject",
		"replaces": ["reject", "disown", "renounce"]
	},
	"stoic": {
		"definition": "enduring pain and hardship without showing feelings or complaining",
		"replaces": ["impassive", "unemotional", "indifferent"]
	},
	"spendthrift": {
		"definition": "a person who spends money in an extravagant way",
		"replaces": ["wasteful", "extravagant", "profligate"]
	},
	"diatribe": {
		"definition": "a forceful and bitter verbal attack against someone or something",
		"replaces": ["tirade", "rant", "harangue"]
	},
	"polarize": {
		"definition": "to divide or cause to divide into two sharply contrasting groups",
		"replaces": ["divide", "separate", "split"]
	},
	"scrupulous": {
		"definition": "diligent, thorough, and extremely attentive to details",
		"replaces": ["thorough", "meticulous", "conscientious"]
	},
	"utterly": {
		"definition": "completely or absolutely",
		"replaces": ["completely", "absolutely", "totally"]
	},
	"underscore": {
		"definition": "to emphasize; to stress",
		"replaces": ["emphasize", "highlight", "stress"]
	},
	"soporific": {
		"definition": "tending to induce drowsiness or sleep",
		"replaces": ["sleep-inducing", "drowsy", "narcotic"]
	},
	"trivial": {
		"definition": "of little value or importance",
		"replaces": ["unimportant", "insignificant", "minor"]
	},
	"tact": {
		"definition": "skill and sensitivity in dealing with others",
		"replaces": ["diplomacy", "sensitivity", "discretion"]
	},
	"supersede": {
		"definition": "to take the place of; to supplant",
		"replaces": ["replace", "supplant", "succeed"]
	},
	"taciturn": {
		"definition": "reserved or uncommunicative in speech; saying little",
		"replaces": ["reserved", "quiet", "uncommunicative"]
	},
	"incredulous": {
		"definition": "unwilling or unable to believe something",
		"replaces": ["disbelieving", "skeptical", "doubtful"]
	},
	"prodigal": {
		"definition": "spending money or resources freely and recklessly; wastefully extravagant",
		"replaces": ["wasteful", "extravagant", "lavish"]
	},
	"tranquil": {
		"definition": "free from disturbance; calm",
		"replaces": ["calm", "peaceful", "serene"]
	},
	"weary": {
		"definition": "feeling or showing tiredness",
		"replaces": ["tired", "exhausted", "fatigued"]
	},
	"venal": {
		"definition": "susceptible to bribery or corruption",
		"replaces": ["corrupt", "bribable", "mercenary"]
	},
	"stern": {
		"definition": "severe or strict in manner or appearance",
		"replaces": ["harsh", "strict", "severe"]
	},
	"utilitarian": {
		"definition": "designed to be useful rather than attractive",
		"replaces": ["practical", "functional", "useful"]
	},
	"trifling": {
		"definition": "unimportant or trivial",
		"replaces": ["petty", "trivial", "insignificant"]
	},
	"tout": {
		"definition": "to attempt to sell or promote aggressively",
		"replaces": ["promote", "advertise", "praise"]
	},
	"didactic": {
		"definition": "intended to teach or instruct; morally instructive",
		"replaces": ["educational", "instructive", "pedagogical"]
	},
	"benign": {
		"definition": "gentle and kind; not harmful or malicious",
		"replaces": ["harmless", "favorable", "gentle"]
	},
	"burgeon": {
		"definition": "to grow or develop rapidly",
		"replaces": ["flourish", "expand", "proliferate"]
	},
	"inimical": {
		"definition": "hostile or unfriendly; adverse",
		"replaces": ["antagonistic", "harmful", "unfavorable"]
	},
	"heterogeneous": {
		"definition": "diverse in character or content; composed of different elements",
		"replaces": ["diverse", "varied", "mixed"]
	},
	"empirical": {
		"definition": "based on observation or experience rather than theory",
		"replaces": ["experiential", "observable", "factual"]
	},
	"intransigent": {
		"definition": "unwilling to compromise; stubborn",
		"replaces": ["inflexible", "unyielding", "obstinate"]
	},
	"innocuous": {
		"definition": "not harmful or offensive; harmless",
		"replaces": ["harmless", "inoffensive", "benign"]
	},
	"fecund": {
		"definition": "intellectually productive; fertile",
		"replaces": ["fertile", "productive", "fruitful"]
	},
	"furtive": {
		"definition": "attempting to avoid notice or attention; secretive",
		"replaces": ["secretive", "stealthy", "sly"]
	},
	"disseminate": {
		"definition": "to spread widely; to diffuse",
		"replaces": ["distribute", "circulate", "propagate"]
	},
	"brazen": {
		"definition": "bold and without shame; brassy",
		"replaces": ["shameless", "bold", "audacious"]
	},
	"cacophonous": {
		"definition": "involving or producing harsh, discordant sounds",
		"replaces": ["dissonant", "jarring", "discordant"]
	},
	"intimate": {
		"definition": "closely acquainted; private and personal; to suggest or hint",
		"replaces": ["suggest", "imply", "personal"]
	},
	"imperious": {
		"definition": "arrogantly domineering or overbearing",
		"replaces": ["domineering", "commanding", "dictatorial"]
	},
	"engender": {
		"definition": "to cause or give rise to",
		"replaces": ["produce", "generate", "create"]
	},
	"intrepid": {
		"definition": "fearless; adventurous",
		"replaces": ["fearless", "brave", "dauntless"]
	},
	"momentary": {
		"definition": "lasting for a very short time; brief",
		"replaces": ["brief", "fleeting", "temporary"]
	},
	"feeble": {
		"definition": "lacking physical strength; weak",
		"replaces": ["weak", "frail", "puny"]
	},
	"hamper": {
		"definition": "to impede or hinder",
		"replaces": ["hinder", "impede", "obstruct"]
	},
	"feasible": {
		"definition": "capable of being done or carried out",
		"replaces": ["possible", "practical", "viable"]
	},
	"calumny": {
		"definition": "a false statement made to injure another's reputation",
		"replaces": ["slander", "defamation", "libel"]
	},
	"canonize": {
		"definition": "to treat as sacred; to glorify",
		"replaces": ["sanctify", "glorify", "idolize"]
	},
	"invigorate": {
		"definition": "to give energy or strength to",
		"replaces": ["energize", "stimulate", "revitalize"]
	},
	"impertinent": {
		"definition": "rude and not showing proper respect; irrelevant",
		"replaces": ["insolent", "rude", "impudent"]
	},
	"entitled": {
		"definition": "believing oneself to be inherently deserving of privileges",
		"replaces": ["privileged", "deserving", "rightful"]
	},
	"irreverent": {
		"definition": "showing a lack of respect for people or things that are generally respected",
		"replaces": ["disrespectful", "impious", "sacrilegious"]
	},
	"mundane": {
		"definition": "lacking interest or excitement; commonplace",
		"replaces": ["ordinary", "commonplace", "banal"]
	},
	"felicitous": {
		"definition": "well-chosen or suited to the circumstances; apt",
		"replaces": ["apt", "appropriate", "fitting"]
	},
	"indispensable": {
		"definition": "absolutely necessary",
		"replaces": ["essential", "necessary", "vital"]
	},
	"flout": {
		"definition": "to openly disregard a rule or convention",
		"replaces": ["defy", "disregard", "scorn"]
	},
	"candid": {
		"definition": "truthful and straightforward; frank",
		"replaces": ["frank", "honest", "forthright"]
	},
	"censure": {
		"definition": "to express severe disapproval of",
		"replaces": ["condemn", "criticize", "denounce"]
	},
	"mitigate": {
		"definition": "to make less severe or intense",
		"replaces": ["alleviate", "reduce", "lessen"]
	},
	"invasive": {
		"definition": "tending to spread very quickly; intruding on others' privacy",
		"replaces": ["intrusive", "encroaching", "aggressive"]
	},
	"pertinacious": {
		"definition": "holding firmly to a belief or purpose; stubborn",
		"replaces": ["persistent", "tenacious", "stubborn"]
	},
	"loathe": {
		"definition": "to feel intense dislike or disgust for",
		"replaces": ["detest", "hate", "abhor"]
	},
	"nettlesome": {
		"definition": "causing irritation or annoyance",
		"replaces": ["annoying", "irritating", "vexing"]
	},
	"forbear": {
		"definition": "to refrain from doing something",
		"replaces": ["abstain", "refrain", "withhold"]
	},
	"lament": {
		"definition": "to express sorrow or regret for",
		"replaces": ["mourn", "grieve", "bemoan"]
	},
	"homogeneous": {
		"definition": "of the same kind; uniform in structure",
		"replaces": ["uniform", "consistent", "similar"]
	},
	"castigate": {
		"definition": "to criticize or punish severely",
		"replaces": ["chastise", "rebuke", "reprimand"]
	},
	"chicanery": {
		"definition": "the use of trickery to achieve a political, financial, or legal purpose",
		"replaces": ["deception", "trickery", "fraud"]
	},
	"obsolete": {
		"definition": "no longer in use or no longer useful",
		"replaces": ["outdated", "antiquated", "archaic"]
	},
	"irresolute": {
		"definition": "showing or feeling hesitancy; uncertain",
		"replaces": ["hesitant", "indecisive", "vacillating"]
	},
	"presumptuous": {
		"definition": "failing to observe the limits of what is permitted or appropriate",
		"replaces": ["arrogant", "forward", "impertinent"]
	},
	"malign": {
		"definition": "to speak harmful untruths about; slander",
		"replaces": ["defame", "slander", "vilify"]
	},
	"nullify": {
		"definition": "to make legally null and void; invalidate",
		"replaces": ["invalidate", "cancel", "void"]
	},
	"haphazard": {
		"definition": "lacking any obvious principle of organization",
		"replaces": ["random", "chaotic", "disorganized"]
	},
	"myopic": {
		"definition": "lacking foresight or intellectual insight",
		"replaces": ["shortsighted", "narrow-minded", "limited"]
	},
	"humdrum": {
		"definition": "lacking excitement; dull",
		"replaces": ["boring", "monotonous", "routine"]
	},
	"caustic": {
		"definition": "sarcastic in a scathing and bitter way",
		"replaces": ["biting", "acerbic", "scathing"]
	},
	"coalesce": {
		"definition": "to come together to form one mass or whole",
		"replaces": ["merge", "unite", "combine"]
	},
	"opaque": {
		"definition": "not able to be seen through; obscure",
		"replaces": ["unclear", "obscure", "ambiguous"]
	},
	"laudable": {
		"definition": "deserving praise and commendation",
		"replaces": ["praiseworthy", "commendable", "admirable"]
	},
	"probity": {
		"definition": "the quality of having strong moral principles; honesty and decency",
		"replaces": ["integrity", "honesty", "righteousness"]
	},
	"malleable": {
		"definition": "easily influenced; pliable",
		"replaces": ["pliable", "adaptable", "flexible"]
	},
	"obviate": {
		"definition": "to remove a need or difficulty",
		"replaces": ["prevent", "eliminate", "preclude"]
	},
	"hodgepodge": {
		"definition": "a confused mixture",
		"replaces": ["jumble", "medley", "mixture"]
	},
	"nonchalant": {
		"definition": "appearing casually calm and relaxed",
		"replaces": ["casual", "indifferent", "blasé"]
	},
	"insipid": {
		"definition": "lacking flavor; bland or uninteresting",
		"replaces": ["bland", "dull", "tasteless"]
	},
	"construe": {
		"definition": "to interpret in a particular way",
		"replaces": ["interpret", "understand", "analyze"]
	},
	"cogent": {
		"definition": "clear, logical, and convincing",
		"replaces": ["compelling", "persuasive", "convincing"]
	},
	"paradigmatic": {
		"definition": "serving as a typical example of something",
		"replaces": ["typical", "exemplary", "representative"]
	},
	"lax": {
		"definition": "not sufficiently strict or careful",
		"replaces": ["loose", "negligent", "slack"]
	},
	"proliferate": {
		"definition": "to increase rapidly in number; multiply",
		"replaces": ["multiply", "spread", "increase"]
	},
	"neophyte": {
		"definition": "a person who is new to a subject or activity",
		"replaces": ["beginner", "novice", "amateur"]
	},
	"omnipresent": {
		"definition": "widely or constantly encountered",
		"replaces": ["ubiquitous", "pervasive", "universal"]
	},
	"impede": {
		"definition": "to delay or prevent by creating obstacles",
		"replaces": ["hinder", "obstruct", "block"]
	},
	"partial": {
		"definition": "favoring one person or side over another; incomplete",
		"replaces": ["biased", "incomplete", "fragmentary"]
	},
	"loquacious": {
		"definition": "tending to talk a great deal; garrulous",
		"replaces": ["talkative", "garrulous", "verbose"]
	},
	"contrite": {
		"definition": "feeling or expressing remorse",
		"replaces": ["remorseful", "penitent", "repentant"]
	},
	"compelling": {
		"definition": "evoking interest or attention in a powerful way",
		"replaces": ["forceful", "persuasive", "engaging"]
	},
	"pedantic": {
		"definition": "overly concerned with formalism or precision",
		"replaces": ["fussy", "dogmatic", "nitpicking"]
	},
	"marginalize": {
		"definition": "to treat a person or group as insignificant",
		"replaces": ["sideline", "exclude", "alienate"]
	},
	"specious": {
		"definition": "superficially plausible but actually wrong",
		"replaces": ["deceptive", "misleading", "fallacious"]
	},
	"plastic": {
		"definition": "capable of being shaped or molded",
		"replaces": ["malleable", "adaptable", "pliable"]
	},
	"oust": {
		"definition": "to drive out or expel",
		"replaces": ["expel", "remove", "depose"]
	},
	"impetuous": {
		"definition": "acting suddenly with little thought or care",
		"replaces": ["impulsive", "rash", "hasty"]
	},
	"pensive": {
		"definition": "engaged in deep or serious thought",
		"replaces": ["thoughtful", "reflective", "contemplative"]
	},
	"misanthropic": {
		"definition": "disliking humankind and avoiding human society",
		"replaces": ["cynical", "antisocial", "reclusive"]
	},
	"convoluted": {
		"definition": "extremely complex and difficult to follow",
		"replaces": ["complex", "complicated", "intricate"]
	},
	"contend": {
		"definition": "to assert something as a position in an argument; to compete",
		"replaces": ["argue", "claim", "maintain"]
	},
	"placid": {
		"definition": "not easily upset or excited; calm and peaceful",
		"replaces": ["calm", "serene", "tranquil"]
	},
	"panache": {
		"definition": "flamboyant confidence of style or manner",
		"replaces": ["flair", "style", "verve"]
	},
	"spurious": {
		"definition": "not genuine, authentic, or true",
		"replaces": ["fake", "counterfeit", "false"]
	},
	"platitude": {
		"definition": "a remark or statement that has been used too often to be interesting",
		"replaces": ["cliché", "truism", "banality"]
	},
	"palpable": {
		"definition": "able to be touched or felt; obvious",
		"replaces": ["tangible", "perceptible", "evident"]
	},
	"irascible": {
		"definition": "having or showing a tendency to be easily angered",
		"replaces": ["irritable", "quick-tempered", "touchy"]
	},
	"portend": {
		"definition": "to be a sign or warning of",
		"replaces": ["foretell", "presage", "foreshadow"]
	},
	"misnomer": {
		"definition": "a wrong or inaccurate name or designation",
		"replaces": ["misname", "mislabel", "misnaming"]
	},
	"covet": {
		"definition": "to yearn to possess something belonging to another",
		"replaces": ["desire", "crave", "envy"]
	},
	"copious": {
		"definition": "abundant in supply or quantity",
		"replaces": ["abundant", "plentiful", "ample"]
	},
	"polemical": {
		"definition": "relating to or involving strongly critical or disputatious writing or speech",
		"replaces": ["controversial", "argumentative", "disputatious"]
	},
	"plodding": {
		"definition": "slow-moving and unexciting",
		"replaces": ["tedious", "laborious", "slow"]
	},
	"subjective": {
		"definition": "based on personal feelings or opinions rather than facts",
		"replaces": ["personal", "biased", "individual"]
	},
	"prescient": {
		"definition": "having knowledge of events before they take place",
		"replaces": ["foresighted", "prophetic", "visionary"]
	},
	"perfidy": {
		"definition": "deceitfulness; untrustworthiness",
		"replaces": ["treachery", "betrayal", "disloyalty"]
	},
	"mercenary": {
		"definition": "primarily concerned with making money at the expense of ethics",
		"replaces": ["greedy", "avaricious", "venal"]
	},
	"provincial": {
		"definition": "having or showing the manners, viewpoints, etc., considered characteristic of unsophisticated inhabitants of a province",
		"replaces": ["parochial", "narrow-minded", "unsophisticated"]
	},
	"negligent": {
		"definition": "failing to take proper care over something",
		"replaces": ["careless", "remiss", "lax"]
	},
	"craven": {
		"definition": "contemptibly lacking in courage; cowardly",
		"replaces": ["cowardly", "pusillanimous", "spineless"]
	},
	"cosmopolitan": {
		"definition": "including people from many different countries; sophisticated",
		"replaces": ["worldly", "sophisticated", "urbane"]
	},
	"precipitate": {
		"definition": "to cause to happen suddenly or unexpectedly; hasty",
		"replaces": ["hasty", "sudden", "abrupt"]
	},
	"prosaic": {
		"definition": "lacking imagination; dull and commonplace",
		"replaces": ["mundane", "ordinary", "unimaginative"]
	},
	"subvert": {
		"definition": "to undermine the power and authority of an established system",
		"replaces": ["undermine", "overthrow", "destabilize"]
	},
	"pristine": {
		"definition": "in its original condition; unspoiled",
		"replaces": ["immaculate", "unspoiled", "perfect"]
	},
	"profuse": {
		"definition": "abundant or copious",
		"replaces": ["abundant", "plentiful", "lavish"]
	},
	"meticulous": {
		"definition": "showing great attention to detail; very careful and precise",
		"replaces": ["careful", "precise", "thorough"]
	},
	"rudimentary": {
		"definition": "involving or limited to basic principles; elementary",
		"replaces": ["basic", "elementary", "primitive"]
	},
	"obsequious": {
		"definition": "obedient or attentive to an excessive degree",
		"replaces": ["servile", "fawning", "sycophantic"]
	},
	"decorum": {
		"definition": "behavior in keeping with good taste and propriety",
		"replaces": ["propriety", "etiquette", "politeness"]
	},
	"deference": {
		"definition": "humble submission and respect",
		"replaces": ["respect", "reverence", "submission"]
	},
	"profundity": {
		"definition": "great depth of insight or knowledge",
		"replaces": ["depth", "wisdom", "insight"]
	},
	"remedial": {
		"definition": "giving or intended as a remedy or cure",
		"replaces": ["corrective", "therapeutic", "curative"]
	},
	"timorous": {
		"definition": "showing or suffering from nervousness or fear",
		"replaces": ["fearful", "timid", "apprehensive"]
	},
	"reproach": {
		"definition": "to express disapproval or disappointment",
		"replaces": ["rebuke", "admonish", "scold"]
	},
	"pugnacious": {
		"definition": "eager or quick to argue, quarrel, or fight",
		"replaces": ["combative", "aggressive", "belligerent"]
	},
	"mordant": {
		"definition": "having or showing a sharp or critical quality",
		"replaces": ["caustic", "biting", "scathing"]
	},
	"salutary": {
		"definition": "producing good effects; beneficial",
		"replaces": ["beneficial", "helpful", "wholesome"]
	},
	"placate": {
		"definition": "to make someone less angry or hostile",
		"replaces": ["appease", "pacify", "mollify"]
	},
	"deft": {
		"definition": "demonstrating skill and cleverness",
		"replaces": ["skillful", "adroit", "nimble"]
	},
	"desultory": {
		"definition": "lacking a plan or purpose; occurring randomly",
		"replaces": ["random", "aimless", "disconnected"]
	},
	"prophetic": {
		"definition": "accurately predicting what will happen in the future",
		"replaces": ["predictive", "prescient", "foreshadowing"]
	},
	"restive": {
		"definition": "impatient or uneasy under control",
		"replaces": ["restless", "unruly", "fidgety"]
	},
	"tortuous": {
		"definition": "full of twists and turns; excessively complicated",
		"replaces": ["winding", "twisting", "convoluted"]
	},
	"robust": {
		"definition": "strong and healthy; vigorous",
		"replaces": ["strong", "vigorous", "sturdy"]
	},
	"sagacious": {
		"definition": "having or showing keen discernment and good judgment",
		"replaces": ["wise", "perceptive", "astute"]
	},
	"outstrip": {
		"definition": "to exceed or surpass",
		"replaces": ["surpass", "exceed", "outdo"]
	},
	"sever": {
		"definition": "to divide by cutting or slicing; to end a relationship",
		"replaces": ["cut", "disconnect", "separate"]
	},
	"proclivity": {
		"definition": "a natural inclination or tendency",
		"replaces": ["tendency", "inclination", "predisposition"]
	},
	"demur": {
		"definition": "to raise objections or show reluctance",
		"replaces": ["object", "hesitate", "protest"]
	},
	"diffident": {
		"definition": "modest or shy because of a lack of self-confidence",
		"replaces": ["shy", "timid", "hesitant"]
	},
	"prudent": {
		"definition": "acting with or showing care and thought for the future",
		"replaces": ["cautious", "careful", "sensible"]
	},
	"sporadic": {
		"definition": "occurring at irregular intervals or only in a few places",
		"replaces": ["intermittent", "occasional", "irregular"]
	},
	"tractable": {
		"definition": "easily managed or controlled",
		"replaces": ["manageable", "docile", "compliant"]
	},
	"salubrious": {
		"definition": "health-giving; healthy",
		"replaces": ["healthy", "wholesome", "beneficial"]
	},
	"sanguine": {
		"definition": "optimistic or positive, especially in a difficult situation",
		"replaces": ["optimistic", "hopeful", "confident"]
	},
	"precarious": {
		"definition": "not securely held or in position; dangerously likely to fall or collapse",
		"replaces": ["unstable", "dangerous", "risky"]
	},
	"slight": {
		"definition": "small in degree; inconsiderable",
		"replaces": ["minor", "small", "insignificant"]
	},
	"puerile": {
		"definition": "childishly silly and immature",
		"replaces": ["childish", "immature", "juvenile"]
	},
	"derivative": {
		"definition": "imitative of the work of another artist, writer, etc.",
		"replaces": ["unoriginal", "imitative", "copied"]
	},
	"dilatory": {
		"definition": "slow to act; intended to cause delay",
		"replaces": ["delaying", "procrastinating", "tardy"]
	},
	"punctilious": {
		"definition": "showing great attention to detail or correct behavior",
		"replaces": ["meticulous", "exact", "precise"]
	},
	"stigmatize": {
		"definition": "to describe or identify in opprobrious terms",
		"replaces": ["condemn", "brand", "label"]
	},
	"transient": {
		"definition": "lasting only for a short time; impermanent",
		"replaces": ["temporary", "fleeting", "brief"]
	},
	"sanction": {
		"definition": "to authorize, approve, or allow; or a penalty for disobeying a law",
		"replaces": ["approve", "authorize", "permit"]
	},
	"scant": {
		"definition": "barely sufficient or adequate",
		"replaces": ["minimal", "insufficient", "meager"]
	},
	"quirky": {
		"definition": "having peculiar or unexpected traits",
		"replaces": ["eccentric", "unusual", "odd"]
	},
	"somnolent": {
		"definition": "sleepy, drowsy",
		"replaces": ["drowsy", "sleepy", "lethargic"]
	},
	"quixotic": {
		"definition": "exceedingly idealistic; unrealistic and impractical",
		"replaces": ["idealistic", "impractical", "romantic"]
	},
	"desiccate": {
		"definition": "to remove the moisture from; to make dry",
		"replaces": ["dry out", "dehydrate", "parch"]
	},
	"equivocate": {
		"definition": "to use ambiguous language to conceal the truth",
		"replaces": ["prevaricate", "hedge", "evade"]
	},
	"recondite": {
		"definition": "difficult to understand; abstruse",
		"replaces": ["obscure", "abstruse", "esoteric"]
	},
	"undermine": {
		"definition": "to weaken gradually or insidiously",
		"replaces": ["sabotage", "weaken", "subvert"]
	},
	"ubiquitous": {
		"definition": "present, appearing, or found everywhere",
		"replaces": ["omnipresent", "pervasive", "universal"]
	},
	"sedulous": {
		"definition": "showing dedication and diligence",
		"replaces": ["diligent", "assiduous", "industrious"]
	},
	"skullduggery": {
		"definition": "underhanded or unscrupulous behavior",
		"replaces": ["trickery", "deception", "intrigue"]
	},
	"repudiate": {
		"definition": "to refuse to accept; to reject",
		"replaces": ["reject", "disown", "renounce"]
	},
	"stoic": {
		"definition": "enduring pain and hardship without showing feelings or complaining",
		"replaces": ["impassive", "unemotional", "indifferent"]
	},
	"spendthrift": {
		"definition": "a person who spends money in an extravagant way",
		"replaces": ["wasteful", "extravagant", "profligate"]
	},
	"diatribe": {
		"definition": "a forceful and bitter verbal attack against someone or something",
		"replaces": ["tirade", "rant", "harangue"]
	},
	"polarize": {
		"definition": "to divide or cause to divide into two sharply contrasting groups",
		"replaces": ["divide", "separate", "split"]
	},
	"scrupulous": {
		"definition": "diligent, thorough, and extremely attentive to details",
		"replaces": ["thorough", "meticulous", "conscientious"]
	},
	"utterly": {
		"definition": "completely or absolutely",
		"replaces": ["completely", "absolutely", "totally"]
	},
	"underscore": {
		"definition": "to emphasize; to stress",
		"replaces": ["emphasize", "highlight", "stress"]
	},
	"soporific": {
		"definition": "tending to induce drowsiness or sleep",
		"replaces": ["sleep-inducing", "drowsy", "narcotic"]
	},
	"trivial": {
		"definition": "of little value or importance",
		"replaces": ["unimportant", "insignificant", "minor"]
	},
	"tact": {
		"definition": "skill and sensitivity in dealing with others",
		"replaces": ["diplomacy", "sensitivity", "discretion"]
	},
	"supersede": {
		"definition": "to take the place of; to supplant",
		"replaces": ["replace", "supplant", "succeed"]
	},
	"taciturn": {
		"definition": "reserved or uncommunicative in speech; saying little",
		"replaces": ["reserved", "quiet", "uncommunicative"]
	},
	"incredulous": {
		"definition": "unwilling or unable to believe something",
		"replaces": ["disbelieving", "skeptical", "doubtful"]
	},
	"prodigal": {
		"definition": "spending money or resources freely and recklessly; wastefully extravagant",
		"replaces": ["wasteful", "extravagant", "lavish"]
	},
	"tranquil": {
		"definition": "free from disturbance; calm",
		"replaces": ["calm", "peaceful", "serene"]
	},
	"weary": {
		"definition": "feeling or showing tiredness",
		"replaces": ["tired", "exhausted", "fatigued"]
	},
	"venal": {
		"definition": "susceptible to bribery or corruption",
		"replaces": ["corrupt", "bribable", "mercenary"]
	},
	"stern": {
		"definition": "severe or strict in manner or appearance",
		"replaces": ["harsh", "strict", "severe"]
	},
	"utilitarian": {
		"definition": "designed to be useful rather than attractive",
		"replaces": ["practical", "functional", "useful"]
	},
	"trifling": {
		"definition": "unimportant or trivial",
		"replaces": ["petty", "trivial", "insignificant"]
	},
	"tout": {
		"definition": "to attempt to sell or promote aggressively",
		"replaces": ["promote", "advertise", "praise"]
	},
	"wary": {
		"definition": "feeling or showing caution about possible dangers or problems",
		"replaces": ["cautious", "guarded", "vigilant"]
	},
	"ingenuous": {
		"definition": "showing innocent or childlike simplicity and candidness",
		"replaces": ["naive", "artless", "unsophisticated"]
	},
	"verbose": {
		"definition": "using or containing more words than necessary",
		"replaces": ["wordy", "long-winded", "prolix"]
	},
	"vacillate": {
		"definition": "to waver between different opinions or actions; be indecisive",
		"replaces": ["waver", "fluctuate", "hesitate"]
	},
	"zealous": {
		"definition": "filled with eagerness and ardent interest in pursuit of something",
		"replaces": ["fervent", "passionate", "devoted"]
	},
	"venerate": {
		"definition": "to regard with great respect or reverence",
		"replaces": ["revere", "honor", "worship"]
	},
	"tendentious": {
		"definition": "expressing or promoting a particular, especially controversial, point of view",
		"replaces": ["biased", "partisan", "prejudiced"]
	},
	"vapid": {
		"definition": "offering nothing that is stimulating or challenging; bland",
		"replaces": ["insipid", "flat", "dull"]
	},
	"turbulent": {
		"definition": "characterized by conflict, disorder, or confusion; not stable or calm",
		"replaces": ["tumultuous", "chaotic", "volatile"]
	},
	"wane": {
		"definition": "to decrease in strength, intensity, or extent",
		"replaces": ["diminish", "decline", "fade"]
	},
	"abhor": {
		"definition": "to regard with disgust and hatred",
		"replaces": ["detest", "loathe", "despise"]
	},
	"acrimonious": {
		"definition": "bitter and sharp in language or tone",
		"replaces": ["bitter", "caustic", "hostile"]
	},
	"affinity": {
		"definition": "a natural liking for or attraction to a person, thing, or idea",
		"replaces": ["attraction", "sympathy", "kinship"]
	},
	"acquiesce": {
		"definition": "to accept something reluctantly but without protest",
		"replaces": ["comply", "consent", "yield"]
	},
	"alienate": {
		"definition": "to cause someone to become unfriendly or indifferent; estrange",
		"replaces": ["estrange", "isolate", "distance"]
	},
	"antedate": {
		"definition": "to precede in time; come before",
		"replaces": ["precede", "predate", "forerun"]
	},
	"acclaim": {
		"definition": "to praise enthusiastically and publicly",
		"replaces": ["praise", "applaud", "celebrate"]
	},
	"abet": {
		"definition": "to encourage or assist someone to do something wrong",
		"replaces": ["encourage", "assist", "support"]
	},
	"acolyte": {
		"definition": "a devoted follower or attendant",
		"replaces": ["follower", "disciple", "adherent"]
	},
	"abreast": {
		"definition": "side by side and facing in the same direction; up to date with current information",
		"replaces": ["informed", "current", "updated"]
	},
	"boisterous": {
		"definition": "noisy, energetic, and cheerful",
		"replaces": ["rowdy", "raucous", "unruly"]
	},
	"belligerent": {
		"definition": "hostile and aggressive",
		"replaces": ["aggressive", "combative", "hostile"]
	},
	"altruistic": {
		"definition": "showing a disinterested and selfless concern for the well-being of others",
		"replaces": ["selfless", "unselfish", "charitable"]
	},
	"adroit": {
		"definition": "clever or skillful in using the hands or mind",
		"replaces": ["skillful", "dexterous", "deft"]
	},
	"apathy": {
		"definition": "lack of interest, enthusiasm, or concern",
		"replaces": ["indifference", "detachment", "disinterest"]
	},
	"banish": {
		"definition": "to send someone away from a country or place as a punishment",
		"replaces": ["exile", "expel", "deport"]
	},
	"ascertain": {
		"definition": "to find out or learn with certainty",
		"replaces": ["determine", "discover", "verify"]
	},
	"accessible": {
		"definition": "easily reached, entered, or used",
		"replaces": ["available", "obtainable", "reachable"]
	},
	"anoint": {
		"definition": "to smear or rub with oil, especially as part of a religious ceremony",
		"replaces": ["consecrate", "bless", "ordain"]
	},
	"confound": {
		"definition": "to cause surprise or confusion in someone; to mix up",
		"replaces": ["perplex", "bewilder", "puzzle"]
	},
	"chivalrous": {
		"definition": "courteous and gallant, especially toward women",
		"replaces": ["gallant", "courteous", "noble"]
	},
	"beneficent": {
		"definition": "doing or producing good, especially by charitable acts",
		"replaces": ["generous", "charitable", "benevolent"]
	},
	"baroque": {
		"definition": "characterized by elaborate, ornate design; highly complex or intricate",
		"replaces": ["ornate", "elaborate", "complex"]
	},
	"amend": {
		"definition": "to change or modify for the better",
		"replaces": ["improve", "alter", "revise"]
	},
	"apropos": {
		"definition": "relevant or appropriate to what is being said or done",
		"replaces": ["relevant", "pertinent", "fitting"]
	},
	"bridle": {
		"definition": "to restrain or control; show resentment or anger",
		"replaces": ["restrain", "check", "control"]
	},
	"assertive": {
		"definition": "having or showing a confident and forceful personality",
		"replaces": ["confident", "forceful", "self-assured"]
	},
	"acquisitive": {
		"definition": "excessively interested in acquiring money or material things",
		"replaces": ["greedy", "materialistic", "covetous"]
	},
	"base": {
		"definition": "without moral principles; ignoble",
		"replaces": ["low", "vile", "dishonorable"]
	},
	"digression": {
		"definition": "a temporary departure from the main subject in speech or writing",
		"replaces": ["deviation", "detour", "tangent"]
	},
	"churlish": {
		"definition": "rude in a mean-spirited and surly way",
		"replaces": ["rude", "boorish", "ill-mannered"]
	},
	"canny": {
		"definition": "having or showing shrewd judgment, especially in business matters",
		"replaces": ["shrewd", "astute", "clever"]
	},
	"byzantine": {
		"definition": "excessively complicated, typically involving a great deal of administrative detail",
		"replaces": ["complex", "convoluted", "labyrinthine"]
	},
	"animus": {
		"definition": "strong hostility or ill feeling",
		"replaces": ["hostility", "animosity", "enmity"]
	},
	"apt": {
		"definition": "appropriate or suitable in the circumstances; quick to learn",
		"replaces": ["suitable", "appropriate", "fitting"]
	},
	"comply": {
		"definition": "to act in accordance with wishes, rules, or instructions",
		"replaces": ["obey", "conform", "adhere"]
	},
	"bogus": {
		"definition": "not genuine or true; fake",
		"replaces": ["fake", "counterfeit", "phony"]
	},
	"amalgamate": {
		"definition": "to combine or unite to form one organization or structure",
		"replaces": ["combine", "merge", "unite"]
	},
	"coercion": {
		"definition": "the practice of persuading someone to do something by using force or threats",
		"replaces": ["force", "compulsion", "intimidation"]
	},
	"discrepancy": {
		"definition": "an inconsistency between facts or claims",
		"replaces": ["inconsistency", "difference", "disparity"]
	},
	"clandestine": {
		"definition": "kept secret or done secretively, especially because illicit",
		"replaces": ["secret", "covert", "surreptitious"]
	},
	"cavalier": {
		"definition": "showing a lack of proper concern; offhand",
		"replaces": ["dismissive", "nonchalant", "careless"]
	},
	"compromise": {
		"definition": "an agreement reached by each side making concessions",
		"replaces": ["concession", "middle ground", "settlement"]
	},
	"apologist": {
		"definition": "a person who offers a defense of something controversial",
		"replaces": ["defender", "advocate", "supporter"]
	},
	"cloak": {
		"definition": "to hide or conceal something",
		"replaces": ["hide", "conceal", "disguise"]
	},
	"crestfallen": {
		"definition": "sad and disappointed",
		"replaces": ["dejected", "downcast", "discouraged"]
	},
	"cataclysmic": {
		"definition": "relating to or denoting a violent natural event",
		"replaces": ["catastrophic", "disastrous", "devastating"]
	},
	"attenuate": {
		"definition": "to reduce the force, effect, or value of something",
		"replaces": ["weaken", "reduce", "diminish"]
	},
	"coin": {
		"definition": "to invent or devise (a new word or phrase)",
		"replaces": ["create", "invent", "originate"]
	},
	"duplicitous": {
		"definition": "deceitful; characterized by duplicity",
		"replaces": ["deceitful", "dishonest", "two-faced"]
	},
	"complacent": {
		"definition": "showing smug or uncritical satisfaction with oneself or one's achievements",
		"replaces": ["self-satisfied", "smug", "contented"]
	},
	"distressed": {
		"definition": "suffering from anxiety, sorrow, or pain",
		"replaces": ["troubled", "anguished", "afflicted"]
	},
	"conciliatory": {
		"definition": "intended or likely to placate or pacify",
		"replaces": ["appeasing", "placating", "pacifying"]
	},
	"astringent": {
		"definition": "causing contraction of body tissues, typically of the skin; harsh or severe",
		"replaces": ["harsh", "severe", "acerbic"]
	},
	"consensus": {
		"definition": "general agreement",
		"replaces": ["agreement", "accord", "harmony"]
	},
	"curtail": {
		"definition": "to reduce in extent or quantity; impose a restriction on",
		"replaces": ["reduce", "limit", "restrict"]
	},
	"circumscribe": {
		"definition": "to restrict or confine within certain limits",
		"replaces": ["limit", "restrict", "confine"]
	},
	"augment": {
		"definition": "to make greater, more numerous, larger, or more intense",
		"replaces": ["increase", "enhance", "expand"]
	},
	"cunning": {
		"definition": "having or showing skill in achieving one's ends by deceit",
		"replaces": ["crafty", "sly", "wily"]
	},
	"expedient": {
		"definition": "convenient and practical although possibly improper or immoral",
		"replaces": ["convenient", "practical", "advantageous"]
	},
	"cumbersome": {
		"definition": "large, heavy, and difficult to carry or use",
		"replaces": ["unwieldy", "bulky", "awkward"]
	},
	"dwindling": {
		"definition": "gradually diminishing in size, amount, or strength",
		"replaces": ["decreasing", "diminishing", "shrinking"]
	},
	"countenance": {
		"definition": "to admit as acceptable or possible; a person's face or facial expression",
		"replaces": ["approve", "support", "tolerate"]
	},
	"collaborate": {
		"definition": "to work jointly on an activity or project",
		"replaces": ["cooperate", "work together", "partner"]
	},
	"distort": {
		"definition": "to give a misleading or false account or impression of",
		"replaces": ["misrepresent", "twist", "falsify"]
	},
	"elucidate": {
		"definition": "to make clear; to explain",
		"replaces": ["explain", "clarify", "illuminate"]
	},
	"complementary": {
		"definition": "combining in such a way as to enhance or emphasize each other's qualities",
		"replaces": ["matching", "corresponding", "compatible"]
	},
	"aversion": {
		"definition": "a strong dislike or disinclination",
		"replaces": ["dislike", "antipathy", "repugnance"]
	},
	"discomfit": {
		"definition": "to make someone feel uneasy or embarrassed",
		"replaces": ["disconcert", "embarrass", "unsettle"]
	},
	"fabricate": {
		"definition": "to invent or concoct (something), typically with deceitful intent",
		"replaces": ["invent", "manufacture", "forge"]
	},
	"debilitating": {
		"definition": "making someone very weak and infirm",
		"replaces": ["weakening", "enfeebling", "incapacitating"]
	},
	"eclipse": {
		"definition": "to obscure or block out; surpass in importance or excellence",
		"replaces": ["overshadow", "surpass", "outshine"]
	},
	"covert": {
		"definition": "not openly acknowledged or displayed; secret",
		"replaces": ["secret", "hidden", "concealed"]
	},
	"competent": {
		"definition": "having the necessary ability, knowledge, or skill to do something successfully",
		"replaces": ["capable", "proficient", "skilled"]
	},
	"divergent": {
		"definition": "tending to be different or develop in different directions",
		"replaces": ["differing", "varying", "deviating"]
	},
	"evade": {
		"definition": "to escape or avoid, especially by cleverness or deceit",
		"replaces": ["avoid", "elude", "dodge"]
	},
	"contentious": {
		"definition": "causing or likely to cause an argument; controversial",
		"replaces": ["controversial", "disputatious", "argumentative"]
	},
	"blithe": {
		"definition": "showing a casual and cheerful indifference",
		"replaces": ["carefree", "heedless", "lighthearted"]
	},
	"dissent": {
		"definition": "to hold or express opinions that are at variance with those previously held",
		"replaces": ["disagree", "differ", "object"]
	},
	"glum": {
		"definition": "looking or feeling dejected; morose",
		"replaces": ["dejected", "gloomy", "downcast"]
	},
	"deliberate": {
		"definition": "done consciously and intentionally; careful and unhurried",
		"replaces": ["intentional", "calculated", "premeditated"]
	},
	"encyclopedic": {
		"definition": "comprehensive in range of knowledge",
		"replaces": ["comprehensive", "extensive", "exhaustive"]
	},
	"credible": {
		"definition": "able to be believed; convincing",
		"replaces": ["believable", "plausible", "trustworthy"]
	},
	"correlate": {
		"definition": "to have a mutual relationship or connection",
		"replaces": ["relate", "correspond", "connect"]
	},
	"elated": {
		"definition": "ecstatically happy",
		"replaces": ["jubilant", "thrilled", "overjoyed"]
	},
	"feckless": {
		"definition": "lacking initiative or strength of character; irresponsible",
		"replaces": ["irresponsible", "ineffective", "worthless"]
	},
	"disingenuous": {
		"definition": "not candid or sincere, typically by pretending that one knows less about something than one really does",
		"replaces": ["insincere", "dishonest", "deceitful"]
	},
	"contempt": {
		"definition": "the feeling that a person or a thing is beneath consideration or worthless",
		"replaces": ["disdain", "scorn", "disregard"]
	},
	"distill": {
		"definition": "to purify by condensation from a vapor; to extract the essential meaning or importance of",
		"replaces": ["extract", "refine", "purify"]
	},
	"harbinger": {
		"definition": "a person or thing that announces or signals the approach of another",
		"replaces": ["forerunner", "precursor", "omen"]
	},
	"droll": {
		"definition": "curious or unusual in a way that provokes dry amusement",
		"replaces": ["amusing", "humorous", "comical"]
	},
	"exacerbate": {
		"definition": "to make a problem, bad situation, or negative feeling worse",
		"replaces": ["worsen", "aggravate", "intensify"]
	},
	"diffuse": {
		"definition": "spread out over a large area; not concentrated; verbose",
		"replaces": ["spread", "scattered", "dispersed"]
	},
	"deride": {
		"definition": "to express contempt for; ridicule",
		"replaces": ["mock", "ridicule", "scorn"]
	},
	"enchant": {
		"definition": "to fill with delight; charm greatly",
		"replaces": ["charm", "captivate", "bewitch"]
	},
	"fester": {
		"definition": "(of a wound or sore) to become septic; to become worse or more intense",
		"replaces": ["rankle", "rot", "putrefy"]
	},
	"divulge": {
		"definition": "to make known (private or sensitive information)",
		"replaces": ["reveal", "disclose", "expose"]
	},
	"dawdle": {
		"definition": "to waste time; be slow",
		"replaces": ["delay", "linger", "loiter"]
	},
	"dubious": {
		"definition": "hesitating or doubting; not to be relied upon",
		"replaces": ["doubtful", "questionable", "suspect"]
	},
	"intrinsic": {
		"definition": "belonging naturally; essential",
		"replaces": ["inherent", "essential", "fundamental"]
	},
	"eccentric": {
		"definition": "unconventional and slightly strange",
		"replaces": ["quirky", "odd", "peculiar"]
	},
	"exasperated": {
		"definition": "intensely irritated and frustrated",
		"replaces": ["irritated", "annoyed", "frustrated"]
	},
	"documentary": {
		"definition": "using pictures or interviews with people involved in real events to provide a factual report",
		"replaces": ["factual", "actual", "real"]
	},
	"dictate": {
		"definition": "to state or order authoritatively; to say or read aloud for another to transcribe",
		"replaces": ["command", "prescribe", "impose"]
	},
	"entrenched": {
		"definition": "firmly established and difficult to change",
		"replaces": ["established", "ingrained", "fixed"]
	},
	"iconoclastic": {
		"definition": "attacking or ignoring cherished beliefs and long-held traditions",
		"replaces": ["rebellious", "unorthodox", "radical"]
	},
	"dogmatic": {
		"definition": "inclined to lay down principles as undeniably true",
		"replaces": ["opinionated", "rigid", "authoritarian"]
	},
	"deflect": {
		"definition": "to cause something to change direction; to divert the attention of",
		"replaces": ["divert", "turn aside", "deviate"]
	},
	"ebullient": {
		"definition": "cheerful and full of energy",
		"replaces": ["exuberant", "buoyant", "enthusiastic"]
	},
	"largesse": {
		"definition": "generosity in bestowing money or gifts upon others",
		"replaces": ["generosity", "bounty", "munificence"]
	},
	"fractious": {
		"definition": "irritable and quarrelsome",
		"replaces": ["unruly", "rebellious", "irritable"]
	},
	"fungible": {
		"definition": "able to replace or be replaced by another identical item; interchangeable",
		"replaces": ["interchangeable", "exchangeable", "replaceable"]
	},
	"exhaustive": {
		"definition": "including all elements or aspects; thorough",
		"replaces": ["thorough", "comprehensive", "complete"]
	},
	"discreet": {
		"definition": "careful and prudent in one's speech or actions",
		"replaces": ["prudent", "careful", "tactful"]
	},
	"exotic": {
		"definition": "originating in or characteristic of a distant foreign country",
		"replaces": ["foreign", "alien", "unfamiliar"]
	},
	"immure": {
		"definition": "to enclose or confine against one's will",
		"replaces": ["imprison", "confine", "enclose"]
	},
	"fallacious": {
		"definition": "based on a mistaken belief",
		"replaces": ["erroneous", "flawed", "deceptive"]
	},
	"discount": {
		"definition": "to regard as of little worth or importance",
		"replaces": ["disregard", "dismiss", "ignore"]
	},
	"facetious": {
		"definition": "treating serious issues with deliberately inappropriate humor",
		"replaces": ["flippant", "joking", "frivolous"]
	},
	"libertine": {
		"definition": "a person who freely indulges in sensual pleasures without moral principles",
		"replaces": ["hedonist", "profligate", "debauchee"]
	},
	"limpid": {
		"definition": "clear, transparent, or pellucid, as water, crystal, or air",
		"replaces": ["clear", "transparent", "lucid"]
	},
	"hackneyed": {
		"definition": "lacking significance through having been overused",
		"replaces": ["trite", "clichéd", "banal"]
	},
	"exhilarating": {
		"definition": "making one feel very happy, animated, or elated",
		"replaces": ["thrilling", "exciting", "invigorating"]
	},
	"divorced": {
		"definition": "separated from direct connection or relation",
		"replaces": ["separated", "detached", "disconnected"]
	},
	"exploitative": {
		"definition": "making use of a situation or person in an unfair or selfish way",
		"replaces": ["manipulative", "abusive", "predatory"]
	},
	"improvise": {
		"definition": "to create and perform spontaneously or without preparation",
		"replaces": ["extemporize", "ad-lib", "make up"]
	},
	"foolhardy": {
		"definition": "recklessly bold or rash",
		"replaces": ["reckless", "rash", "imprudent"]
	},
	"dissident": {
		"definition": "a person who opposes official policy, especially that of an authoritarian state",
		"replaces": ["rebel", "nonconformist", "protestor"]
	},
	"fallible": {
		"definition": "capable of making mistakes or being wrong",
		"replaces": ["imperfect", "erring", "error-prone"]
	},
	"malfeasance": {
		"definition": "wrongdoing, especially by a public official",
		"replaces": ["misconduct", "wrongdoing", "misbehavior"]
	},
	"mawkish": {
		"definition": "sentimental in a feeble or sickly way",
		"replaces": ["sentimental", "maudlin", "saccharine"]
	},
	"incongruous": {
		"definition": "not in harmony or keeping with the surroundings or other aspects",
		"replaces": ["inappropriate", "unsuitable", "mismatched"]
	},
	"extraneous": {
		"definition": "irrelevant or unrelated to the subject being dealt with",
		"replaces": ["irrelevant", "unrelated", "superfluous"]
	},
	"elitist": {
		"definition": "relating to or supporting the view that a society should be led by an elite",
		"replaces": ["exclusive", "snobbish", "superior"]
	},
	"foreseeable": {
		"definition": "able to be foreseen or predicted",
		"replaces": ["predictable", "anticipated", "expected"]
	},
	"inhibit": {
		"definition": "to hinder, restrain, or prevent an action or process",
		"replaces": ["restrain", "prevent", "hinder"]
	},
	"hinder": {
		"definition": "to make it difficult for someone to do something or for something to happen",
		"replaces": ["obstruct", "impede", "hamper"]
	},
	"efficacious": {
		"definition": "successful in producing a desired or intended result",
		"replaces": ["effective", "successful", "potent"]
	},
	"florid": {
		"definition": "having a red or flushed complexion; excessively ornate",
		"replaces": ["elaborate", "flowery", "ornate"]
	},
	"manifest": {
		"definition": "clear or obvious to the eye or mind; to show or demonstrate clearly",
		"replaces": ["evident", "apparent", "obvious"]
	},
	"obeisance": {
		"definition": "deferential respect or homage",
		"replaces": ["deference", "homage", "reverence"]
	},
	"interchangeable": {
		"definition": "able to be exchanged with one another without loss of function or value",
		"replaces": ["exchangeable", "substitutable", "fungible"]
	},
	"fervor": {
		"definition": "intense and passionate feeling",
		"replaces": ["passion", "zeal", "enthusiasm"]
	},
	"exacting": {
		"definition": "making severe demands; requiring great care or effort",
		"replaces": ["demanding", "rigorous", "stringent"]
	},
	"forsake": {
		"definition": "to abandon or leave",
		"replaces": ["abandon", "desert", "renounce"]
	},
	"inscrutable": {
		"definition": "impossible to understand or interpret",
		"replaces": ["mysterious", "enigmatic", "impenetrable"]
	},
	"impair": {
		"definition": "to weaken or damage something",
		"replaces": ["damage", "weaken", "diminish"]
	},
	"equitable": {
		"definition": "fair and impartial",
		"replaces": ["fair", "just", "impartial"]
	},
	"gawky": {
		"definition": "nervously awkward and ungainly",
		"replaces": ["awkward", "clumsy", "ungainly"]
	},
	"minute": {
		"definition": "extremely small; tiny and precise in detail",
		"replaces": ["tiny", "minuscule", "microscopic"]
	},
	"ostentatious": {
		"definition": "characterized by vulgar or pretentious display; designed to impress",
		"replaces": ["showy", "pretentious", "flashy"]
	},
	"laconic": {
		"definition": "using very few words",
		"replaces": ["terse", "concise", "brief"]
	},
	"futile": {
		"definition": "incapable of producing any useful result; pointless",
		"replaces": ["pointless", "useless", "vain"]
	},
	"flummoxed": {
		"definition": "bewildered or perplexed",
		"replaces": ["confused", "bewildered", "perplexed"]
	},
	"gratify": {
		"definition": "to give pleasure or satisfaction to",
		"replaces": ["satisfy", "please", "delight"]
	},
	"lionize": {
		"definition": "to treat as an object of great interest or importance",
		"replaces": ["celebrate", "idolize", "glorify"]
	},
	"impugn": {
		"definition": "to dispute the truth, validity, or honesty of a statement or motive",
		"replaces": ["challenge", "question", "attack"]
	},
	"erratic": {
		"definition": "not even or regular in pattern or movement; unpredictable",
		"replaces": ["unpredictable", "inconsistent", "volatile"]
	},
	"inveigle": {
		"definition": "to persuade someone to do something by means of deception or flattery",
		"replaces": ["entice", "lure", "cajole"]
	},
	"modish": {
		"definition": "conforming to the current style or fashion",
		"replaces": ["fashionable", "trendy", "stylish"]
	},
};
