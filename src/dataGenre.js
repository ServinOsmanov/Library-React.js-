let dataGenre = [
    {
        "Genre": "novel",
        "books": [
        {
            "Title": "No Longer at Ease",
            "Author": "Chinua Achebe",
            "Genre": "novel",
            "Summary": `No Longer at Ease is a 1960 novel by Nigerian author Chinua Achebe. It is the story of an Igbo man, 
            Obi Okonkwo, who leaves his village for a British education and a job in the Nigerian colonial civil service, 
            but struggles to adapt to a Western lifestyle and ends up taking a bribe. The novel is the second work in what 
            is sometimes referred to as the "African trilogy", following Things Fall Apart and preceding Arrow of God. 
            Things Fall Apart concerns the struggle of Obi Okonkwo's grandfather Okonkwo against the changes brought by 
            the English.` 
        },
        {
            "Title": "A Man of the People",
            "Author": "Chinua Achebe",
            "Genre": "novel",
            "Summary": `A Man of the People (1966) is the fourth novel by Chinua Achebe. This satirical novel is a
                     story told by the young and educated narrator, Odili, on his conflict with Chief Nanga, his former 
                     teacher who enters a career in politics in an unnamed modern African country. Odili represents the 
                     changing younger generation; Nanga represents the traditional customs of Nigeria. The book ends with 
                     a military coup, similar to the real-life coups of Johnson Aguiyi-Ironsi, Chukwuma Kaduna Nzeogwu and 
                     Yakubu Gowon.` 
        },
        {
            "Author": "Honor\u00e9 de Balzac",
            "Title": "Le P\u00e8re Goriot",
            "Genre": "novel",
            "Summary": `Le Père Goriot is an 1835 novel by French novelist and playwright Honoré de Balzac, 
                        included in the Scènes de la vie privée section of his novel sequence La Comédie humaine. 
                        Set in Paris in 1819, it follows the intertwined lives of three characters: the elderly doting Goriot; 
                        a mysterious criminal-in-hiding named Vautrin; and a naive law student named Eugène de Rastignac.`
        },
        {
            "Author": "Honor\u00e9 de Balzac",
            "Title": "A Woman of Thirty",
            "Genre": "novel",
            "Summary": `Balzac’s flawed novel, A Woman of Thirty, is essentially a character study of a woman named Julie who 
                        makes incorrect choices, ruins her life and the consequences of those choices to her children. The plot 
                        starts off very well but then loses its focus, finally wandering into dodgy soap territory laced with 
                        coincidence. `
        },
        {
            "Author": "Honor\u00e9 de Balzac",
            "Title": "Cousin Bette (Modern Library Classics)",
            "Genre": "novel",
            "Summary": `Bette is a wronged soul; and when her passion does break, it is, as Balzac says, sublime and terrifying,” 
                        wrote V. S. Pritchett. A late masterpiece in Balzac’s La Comédie Humaine, Cousin Bette is the story of a 
                        Vosges peasant who rebels against her scornful upper-class relatives, skillfully turning their selfish 
                        obsessions against them. The novel exemplifies what Henry James described as Balzac’s “huge, all-compassing, 
                        all-desiring, all-devouring love of reality.”`
        },
        {
            "Author": "Giovanni Boccaccio",
            "Title": "The Decameron",
            "Genre": "novel",
            "Summary": `The Decameron is a collection of novellas by the 14th-century Italian author Giovanni Boccaccio. 
                        The book is structured as a frame story containing 100 tales told by a group of seven young women and three 
                        young men sheltering in a secluded villa just outside Florence to escape the Black Death, which was afflicting 
                        the city. Boccaccio probably conceived the Decameron after the epidemic of 1348, and completed it by 1353. 
                        The various tales of love in The Decameron range from the erotic to the tragic. Tales of wit, practical jokes, 
                        and life lessons contribute to the mosaic. In addition to its literary value and widespread influence 
                        (for example on Chaucer's The Canterbury Tales), it provides a document of life at the time. Written in the 
                        vernacular of the Florentine language, it is considered a masterpiece of classical early Italian prose.` 
        },
        {
            "Author": "Giovanni Boccaccio",
            "Title": "Amorosa visione ",
            "Genre": "novel",
            "Summary": `Amorosa visione is a narrative poem by Boccaccio, full of echoes of the Divine Comedy and consisting of 50 
                        canti in terza rima. It tells of a dream in which the poet sees, in sequence, the triumphs of Wisdom, 
                        Earthly Glory, Wealth, Love, all-destroying Fortune (and her servant Death), and thereby becomes worthy of 
                        the now heavenly love of Fiammetta. The triumphs include mythological, classical and contemporary medieval 
                        figures. Their moral, cultural and historical architecture was without precedent, and led Petrarch to create 
                        his own Trionfi on the same model. Among contemporaries Giotto and Dante stand out, the latter being 
                        celebrated above any other artist, ancient or modern.`
        },
        {
            "Author": "Giovanni Boccaccio",
            "Title": "Corbaccio",
            "Genre": "novel",
            "Summary": `The work is narrated in the first person and opens with a justification (it is not a real prologue) in which the 
                        author declares that he wishes his narrative to be a consolation to those who read it, such as he found thanks 
                        to God and the intercession of Our Lady.The protagonist, desperate because of the unreturned love of a widow, 
                        calls on Death, falls asleep and dreams. In his dream appears a man who declares himself to be the deceased 
                        husband of the widow, who says he has come, sent by God and through the intercession of Our Lady, to free him 
                        from the labyrinth of love into which he has fallen.`  
        },
        {
            "Author": "Emily Bront\u00eb",
            "Title": "Wuthering Heights",
            "Genre": "novel",
            "Summary": `Wuthering Heights is Emily Brontë's only novel. Written between October 1845 and June 1846, Wuthering Heights 
                        was published in 1847 under the pseudonym "Ellis Bell"; Brontë died the following year, aged 30. Wuthering Heights 
                        and Anne Brontë's Agnes Grey were accepted by publisher Thomas Newby before the success of their sister Charlotte's 
                        novel, Jane Eyre. After Emily's death, Charlotte edited the manuscript of Wuthering Heights, and arranged for 
                        the edited version to be published as a posthumous second edition in 1850.` 
        },
        {
            "Author": "Emily Bront\u00eb",
            "Title": "The Night is Darkening Round Me",
            "Genre": "novel",
            "Summary": `Introducing Little Black Classics: 80 books for Penguin's 80th birthday. Little Black Classics celebrate the huge 
                        range and diversity of Penguin Classics, with books from around the world and across many centuries. They take us 
                        from a balloon ride over Victorian London to a garden of blossom in Japan, from Tierra del Fuego to 16th century 
                        California and the Russian steppe. Here are stories lyrical and savage; poems epic and intimate; essays satirical 
                        and inspirational; and ideas that have shaped the lives of millions. ` 
        },
        {
            "Author": "Albert Camus",
            "Title": "The Stranger",
            "Genre": "novel",
            "Summary": `The title character is Meursault, an indifferent French Algerian described as "a citizen of France 
                        domiciled in North Africa, a man of the Mediterranean, an homme du midi yet one who hardly partakes of the 
                        traditional Mediterranean culture".He attends his mother's funeral. A few days later, he kills an 
                        Arab man in French Algiers, who was involved in a conflict with a friend. Meursault is tried and sentenced 
                        to death. The story is divided into two parts, presenting Meursault's first-person narrative view before and 
                        after the murder, respectively.`
        },
        {
            "Author": "Albert Camus",
            "Title": "The Plague",
            "Genre": "novel",
            "Summary": `The novel is believed to be based on the cholera epidemic that killed a large percentage of Oran's population in 
                        1849 following French colonization, but the novel is placed in the 1940s.[1] Oran and its environs were struck by 
                        disease multiple times before Camus published this novel. According to a research report by the Centers for Disease 
                        Control and Prevention, Oran was decimated by the plague in 1556 and 1678, but all later outbreaks, in 1921 (185 cases), 
                        1931 (76 cases), and 1944 (95 cases), were very far from the scale of the epidemic described in the novel.`
        },
        {
            "Author": "Albert Camus",
            "Title": "The Fall ",
            "Genre": "novel",
            "Summary": `The Fall (French: La Chute) is a philosophical novel by Albert Camus. First published in 1956, it is his last complete 
                        work of fiction. Set in Amsterdam, The Fall consists of a series of dramatic monologues by the self-proclaimed "judge-penitent" 
                        Jean-Baptiste Clamence, as he reflects upon his life to a stranger. In what amounts to a confession, Clamence tells of 
                        his success as a wealthy Parisian defense lawyer who was highly respected by his colleagues; his crisis, and his ultimate 
                        "fall" from grace, was meant to invoke, in secular terms, The Fall of Man in the Garden of Eden. The Fall explores themes 
                        of innocence, imprisonment, non-existence, and truth. In a eulogy to Albert Camus, existentialist philosopher Jean-Paul Sartre 
                        described the novel as "perhaps the most beautiful and the least understood" of Camus' books.`
        },
        {  
            "Author": "Jane Austen",
            "Title": "Pride and Prejudice",
            "Genre": "romance novel",
            "Summary": `Pride and Prejudice is a romance novel by Jane Austen, first published in 1813. 
                        The story charts the emotional development of the protagonist, Elizabeth Bennet, 
                        who learns the error of making hasty judgements and comes to appreciate the difference 
                        between the superficial and the essential. The comedy of the writing lies in the depiction 
                        of manners, education, marriage and money in the British Regency.`
        },
        {
            "Author": "Jane Austen",
            "Title": "Sense and Sensibility",
            "Genre": "romance novel",
            "Summary": `The novel follows the young women to their new home with their widowed mother, a meagre cottage 
                        on the property of a distant relative, where they experience love, romance and heartbreak. 
                        The novel is set in southwest England, London and Sussex between 1792 and 1797.`
        },
        {
            "Author": "Jane Austen",
            "Title": "Mansfield Park",
            "Genre": "romance novel",
            "Summary": `Mansfield Park is the third published novel by Jane Austen, first published in 1814. The novel 
                        tells the story of Fanny Price starting when her overburdened family sends her at age 10 to live 
                        in the household of her wealthy aunt and uncle, through to her marriage.`
        },
        {
            "Author": "Fyodor Dostoevsky",
            "Title": "The Idiot",
            "Genre": "Philosophical novel",
            "Summary": `The title is an ironic reference to the central character of the novel, Prince (Knyaz) Lev Nikolaevich Myshkin, 
                        a young man whose goodness and open-hearted simplicity lead many of the more worldly characters he encounters 
                        to mistakenly assume that he lacks intelligence and insight. In the character of Prince Myshkin, 
                        Dostoevsky set himself the task of depicting "the positively good and beautiful man".
                        The novel examines the consequences of placing such a unique individual at the centre of the conflicts, 
                        desires, passions and egoism of worldly society, both for the man himself and for those with whom he becomes 
                        involved. The result, according to philosopher A.C. Grayling, is "one of the most excoriating, compelling and 
                        remarkable books ever written; and without question one of the greatest."`
        },
        {
            "Author": "Fyodor Dostoevsky",
            "Title": "Humiliated and Insulted",
            "Genre": "Philosophical novel",
            "Summary": `Natasha leaves her parents' home and runs away with Alyosha (prince Alexey) – the son of Prince Valkovsky. 
                        As a result of his pain, her father, Nikolai, curses her. The only friend that remains by Natasha's side 
                        is Ivan – her childhood friend who is deeply in love with her, and whom Natasha has rejected despite their 
                        being engaged. Prince Valkovsky tries to destroy Alyosha's plans to marry Natasha, and wants to make him 
                        marry the rich princess Katerina. Alyosha is a naïve but loveable young man who is easily manipulated by 
                        his father. Following his father's plan, Alyosha falls in love with Katerina, but still loves Natasha. He is 
                        constantly torn between these two women, too indecisive and infatuated with both to make a decision. 
                        Eventually, Natasha sacrifices her own feelings and withdraws in order for Alyosha to choose Katerina. 
                        Meanwhile, Ivan rescues an orphan girl, Elena (known as Nellie), from the clutches of a procuress and learns 
                        that her mother ran away from her father's (Smith's) home with her sweetheart, a man who abandoned her when 
                        Nellie's mother gave birth. It is later revealed that Prince Valkovsky is Nellie's father and her parents 
                        were legally married. The poor woman and her daughter come back to Petersburg and find Smith; Nellie's mother 
                        asks forgiveness, but he rejects them. Nellie's mother is dying and she makes Nellie promise to never go for
                        help to her real father, whose name is on a document she leaves her daughter. In attempt to make Nikolai 
                        (Natasha's father) reconcile with Natasha, Ivan persuades Nikolai and his wife to adopt Nellie. By telling 
                        them her life story, Nellie makes Nikolai's heart soften and he forgives Natasha and removes his curse, and 
                        they are reunited. Natasha's family plan to move from Petersburg, but just before they leave Nellie dies from 
                        a chronic heart condition; the little girl makes it clear to Ivan she does not forgive her father for his cruel 
                        reatment of her mother. She also tells him he should marry Natasha. The story ends on an ambiguous note with
                        Natasha and Ivan reflecting on the events that have unfolded.`
        },
        {
            "Author": "Fyodor Dostoevsky",
            "Title": "The Brothers Karamazov",
            "Genre": "Philosophical novel",
            "Summary": `The Brothers Karamazov is a passionate philosophical novel set in 19th-century Russia, that enters 
                        deeply into the ethical debates of God, free will, and morality. It is a spiritual drama of moral 
                        struggles concerning faith, doubt, judgment, and reason, set against a modernizing Russia, with a 
                        plot which revolves around the subject of patricide. Dostoyevsky composed much of the novel in Staraya 
                        Russa, which inspired the main setting.Since its publication, it has been acclaimed as one of 
                        the supreme achievements in world literature.`
        }
        ]
    },
    {
        "Genre": "fairy-tale",
        "books": [
        {
            "Title": "Fairy tales",
            "Author": "Hans Christian Andersen",
            "Genre": "fairy-tale",
            "Summary": `First Collection is a collection of nine fairy tales by Hans Christian Andersen. 
                        The tales were published in a series of three installments by C. A. Reitzel in Copenhagen, 
                        Denmark between May 1835 and April 1837, and represent Andersen's first venture into the 
                        fairy tale genre.`
        },
        {
            "Title": "The Angel",
            "Author": "Hans Christian Andersen",
            "Genre": "fairy-tale",
            "Summary": `When the tale opens, a child has died, and an angel is escorting him to Heaven. 
                        They wander over the earth for a while, visiting well-known places. Along the way 
                        they gather flowers to transplant into the gardens of Heaven. The angel takes the 
                        child to a poverty-stricken area where a dead field lily lies in a trash heap. The 
                        angel salvages the flower explaining that it had cheered a crippled boy before he died. 
                        The angel then reveals he was the boy, and the boy continued his journey.`
        },
        {
            "Title": "The Fir-Tree",
            "Author": "Hans Christian Andersen",
            "Genre": "fairy-tale",
            "Summary": `"The Fir-Tree" is a literary fairy tale by the Danish poet and author Hans Christian 
                        Andersen (1805–1875). The tale is about a fir tree so anxious to grow up, so anxious 
                        for greater things, that he cannot appreciate living in the moment. The tale was first 
                        published 21 December 1844 with "The Snow Queen", in Copenhagen, Denmark, by C.A. Reitzel. 
                        One scholar (Andersen biographer Jackie Wullschlager) indicates that "The Fir-Tree" was the 
                        first of Andersen's fairy tales to express a deep pessimism.`
        }
        ]
    },
    {
        "Genre": "narrative poem",
        "books": [
        {
            "Author": "Dante Alighieri",
            "Title": "The Divine Comedy",
            "Genre": "narrative poem",
            "Summary": `The Divine Comedy is a long narrative poem by Dante Alighieri, 
                        begun in 1308 and completed in 1320, a year before his death in 1321. 
                        It is widely considered the preeminent work in Italian literature, and 
                        is seen as one of the greatest works of world literature. The poem's imaginative 
                        vision of the afterlife is representative of the medieval world-view as it had developed 
                        in the Western Church by the 14th century. It helped establish the Tuscan language, in 
                        which it is written, as the standardized Italian language. It is divided into three 
                        parts: Inferno, Purgatorio, and Paradiso.`
        },
        {   
            "Title": "The Portable Dante (Penguin Classics)", 
            "Author": "Dante Alighieri",
            "Genre": "narrative poem",
            "Summary": `Dante Alighieri paved the way for modern literature, while creating verse and prose that 
                        remain unparalleled for formal elegance, intellectual depth, and emotional grandeur. 
                        The Portable Dante contains complete verse translations of Dante's two masterworks, 
                        The Divine Comedy and La Vita Nuova, as well as a bibliography, notes, and an introduction 
                        by eminent scholar and translator Mark Musa.` 
        },
        {   
            "Title": "Vita Nuova", 
            "Author": "Dante Alighieri",
            "Genre": "narrative poem",
            "Summary": `Vita Nuova is regarded as Dante's most profound creation. The thirty-one poems in this, 
                        the first of his major writings, are linked by a lyrical prose narrative celebrating and debating 
                        the subject of love. Composed upon Dante's meeting with Beatrice and the "Lord of Love," it is a 
                        love story set to the task of confirming the "new life" this meeting inspired. With a critical 
                        introduction and explanatory notes, this is a new translation of a supreme work which has been
                        read variously as biography, religious allegory, and a meditation on poetry itself.` 
        },
        {
            "Author": "Emily Bront\u00eb",
            "Title": "Poems of Solitude",
            "Genre": "poem",
            "Summary": `The cheerful comforts of home, and the joys of memory and hope, form the background for an expression of inner 
                        fortitude in this moving book of solitude and sorrow. Despite the isolation of Haworth, the small Yorkshire village 
                        where she was raised, Emily Brontë manages to transcend her surroundings to give the universal themes of love, time,
                        and death a thoroughly new and fascinating interpretation. Penned for her own consolation, and as a kind of shorthand 
                        of her soul, these poems—most of which were unpublished in her lifetime—reveal the depth and scope of her vision. 
                        Emily Brontë is the author of Wuthering Heights, one of the most popular romances of all time.` 
        } 
        ]
    },
    {
        "Genre": "poem",
        "books": [
        {
            "Author": "Dante Alighieri",
            "Title": "The Divine Comedy",
            "Genre": "narrative poem",
            "Summary": `The Divine Comedy is a long narrative poem by Dante Alighieri, 
                        begun in 1308 and completed in 1320, a year before his death in 1321. 
                        It is widely considered the preeminent work in Italian literature, and 
                        is seen as one of the greatest works of world literature. The poem's imaginative 
                        vision of the afterlife is representative of the medieval world-view as it had developed 
                        in the Western Church by the 14th century. It helped establish the Tuscan language, in 
                        which it is written, as the standardized Italian language. It is divided into three 
                        parts: Inferno, Purgatorio, and Paradiso.`
        },
        {   
            "Title": "The Portable Dante (Penguin Classics)", 
            "Author": "Dante Alighieri",
            "Genre": "narrative poem",
            "Summary": `Dante Alighieri paved the way for modern literature, while creating verse and prose that 
                        remain unparalleled for formal elegance, intellectual depth, and emotional grandeur. 
                        The Portable Dante contains complete verse translations of Dante's two masterworks, 
                        The Divine Comedy and La Vita Nuova, as well as a bibliography, notes, and an introduction 
                        by eminent scholar and translator Mark Musa.` 
        },
        {   
            "Title": "Vita Nuova", 
            "Author": "Dante Alighieri",
            "Genre": "narrative poem",
            "Summary": `Vita Nuova is regarded as Dante's most profound creation. The thirty-one poems in this, 
                        the first of his major writings, are linked by a lyrical prose narrative celebrating and debating 
                        the subject of love. Composed upon Dante's meeting with Beatrice and the "Lord of Love," it is a 
                        love story set to the task of confirming the "new life" this meeting inspired. With a critical 
                        introduction and explanatory notes, this is a new translation of a supreme work which has been
                        read variously as biography, religious allegory, and a meditation on poetry itself.` 
        },
        {
            "Author": "Emily Bront\u00eb",
            "Title": "Poems of Solitude",
            "Genre": "poem",
            "Summary": `The cheerful comforts of home, and the joys of memory and hope, form the background for an expression of inner 
                        fortitude in this moving book of solitude and sorrow. Despite the isolation of Haworth, the small Yorkshire village 
                        where she was raised, Emily Brontë manages to transcend her surroundings to give the universal themes of love, time,
                        and death a thoroughly new and fascinating interpretation. Penned for her own consolation, and as a kind of shorthand 
                        of her soul, these poems—most of which were unpublished in her lifetime—reveal the depth and scope of her vision. 
                        Emily Brontë is the author of Wuthering Heights, one of the most popular romances of all time.` 
        }
        ]
    },
    {
        "Genre": "romance novel",
        "books": [
        {
            "Title": "No Longer at Ease",
            "Author": "Chinua Achebe",
            "Genre": "novel",
            "Summary": `No Longer at Ease is a 1960 novel by Nigerian author Chinua Achebe. It is the story of an Igbo man, 
            Obi Okonkwo, who leaves his village for a British education and a job in the Nigerian colonial civil service, 
            but struggles to adapt to a Western lifestyle and ends up taking a bribe. The novel is the second work in what 
            is sometimes referred to as the "African trilogy", following Things Fall Apart and preceding Arrow of God. 
            Things Fall Apart concerns the struggle of Obi Okonkwo's grandfather Okonkwo against the changes brought by 
            the English.` 
        },
        {
            "Title": "A Man of the People",
            "Author": "Chinua Achebe",
            "Genre": "novel",
            "Summary": `A Man of the People (1966) is the fourth novel by Chinua Achebe. This satirical novel is a
                     story told by the young and educated narrator, Odili, on his conflict with Chief Nanga, his former 
                     teacher who enters a career in politics in an unnamed modern African country. Odili represents the 
                     changing younger generation; Nanga represents the traditional customs of Nigeria. The book ends with 
                     a military coup, similar to the real-life coups of Johnson Aguiyi-Ironsi, Chukwuma Kaduna Nzeogwu and 
                     Yakubu Gowon.` 
        },
        {
            "Author": "Honor\u00e9 de Balzac",
            "Title": "Le P\u00e8re Goriot",
            "Genre": "novel",
            "Summary": `Le Père Goriot is an 1835 novel by French novelist and playwright Honoré de Balzac, 
                        included in the Scènes de la vie privée section of his novel sequence La Comédie humaine. 
                        Set in Paris in 1819, it follows the intertwined lives of three characters: the elderly doting Goriot; 
                        a mysterious criminal-in-hiding named Vautrin; and a naive law student named Eugène de Rastignac.`
        },
        {
            "Author": "Honor\u00e9 de Balzac",
            "Title": "A Woman of Thirty",
            "Genre": "novel",
            "Summary": `Balzac’s flawed novel, A Woman of Thirty, is essentially a character study of a woman named Julie who 
                        makes incorrect choices, ruins her life and the consequences of those choices to her children. The plot 
                        starts off very well but then loses its focus, finally wandering into dodgy soap territory laced with 
                        coincidence. `
        },
        {
            "Author": "Honor\u00e9 de Balzac",
            "Title": "Cousin Bette (Modern Library Classics)",
            "Genre": "novel",
            "Summary": `Bette is a wronged soul; and when her passion does break, it is, as Balzac says, sublime and terrifying,” 
                        wrote V. S. Pritchett. A late masterpiece in Balzac’s La Comédie Humaine, Cousin Bette is the story of a 
                        Vosges peasant who rebels against her scornful upper-class relatives, skillfully turning their selfish 
                        obsessions against them. The novel exemplifies what Henry James described as Balzac’s “huge, all-compassing, 
                        all-desiring, all-devouring love of reality.”`
        },
        {
            "Author": "Giovanni Boccaccio",
            "Title": "The Decameron",
            "Genre": "novel",
            "Summary": `The Decameron is a collection of novellas by the 14th-century Italian author Giovanni Boccaccio. 
                        The book is structured as a frame story containing 100 tales told by a group of seven young women and three 
                        young men sheltering in a secluded villa just outside Florence to escape the Black Death, which was afflicting 
                        the city. Boccaccio probably conceived the Decameron after the epidemic of 1348, and completed it by 1353. 
                        The various tales of love in The Decameron range from the erotic to the tragic. Tales of wit, practical jokes, 
                        and life lessons contribute to the mosaic. In addition to its literary value and widespread influence 
                        (for example on Chaucer's The Canterbury Tales), it provides a document of life at the time. Written in the 
                        vernacular of the Florentine language, it is considered a masterpiece of classical early Italian prose.` 
        },
        {
            "Author": "Giovanni Boccaccio",
            "Title": "Amorosa visione ",
            "Genre": "novel",
            "Summary": `Amorosa visione is a narrative poem by Boccaccio, full of echoes of the Divine Comedy and consisting of 50 
                        canti in terza rima. It tells of a dream in which the poet sees, in sequence, the triumphs of Wisdom, 
                        Earthly Glory, Wealth, Love, all-destroying Fortune (and her servant Death), and thereby becomes worthy of 
                        the now heavenly love of Fiammetta. The triumphs include mythological, classical and contemporary medieval 
                        figures. Their moral, cultural and historical architecture was without precedent, and led Petrarch to create 
                        his own Trionfi on the same model. Among contemporaries Giotto and Dante stand out, the latter being 
                        celebrated above any other artist, ancient or modern.`
        },
        {
            "Author": "Giovanni Boccaccio",
            "Title": "Corbaccio",
            "Genre": "novel",
            "Summary": `The work is narrated in the first person and opens with a justification (it is not a real prologue) in which the 
                        author declares that he wishes his narrative to be a consolation to those who read it, such as he found thanks 
                        to God and the intercession of Our Lady.The protagonist, desperate because of the unreturned love of a widow, 
                        calls on Death, falls asleep and dreams. In his dream appears a man who declares himself to be the deceased 
                        husband of the widow, who says he has come, sent by God and through the intercession of Our Lady, to free him 
                        from the labyrinth of love into which he has fallen.`  
        },
        {
            "Author": "Emily Bront\u00eb",
            "Title": "Wuthering Heights",
            "Genre": "novel",
            "Summary": `Wuthering Heights is Emily Brontë's only novel. Written between October 1845 and June 1846, Wuthering Heights 
                        was published in 1847 under the pseudonym "Ellis Bell"; Brontë died the following year, aged 30. Wuthering Heights 
                        and Anne Brontë's Agnes Grey were accepted by publisher Thomas Newby before the success of their sister Charlotte's 
                        novel, Jane Eyre. After Emily's death, Charlotte edited the manuscript of Wuthering Heights, and arranged for 
                        the edited version to be published as a posthumous second edition in 1850.` 
        },
        {
            "Author": "Emily Bront\u00eb",
            "Title": "The Night is Darkening Round Me",
            "Genre": "novel",
            "Summary": `Introducing Little Black Classics: 80 books for Penguin's 80th birthday. Little Black Classics celebrate the huge 
                        range and diversity of Penguin Classics, with books from around the world and across many centuries. They take us 
                        from a balloon ride over Victorian London to a garden of blossom in Japan, from Tierra del Fuego to 16th century 
                        California and the Russian steppe. Here are stories lyrical and savage; poems epic and intimate; essays satirical 
                        and inspirational; and ideas that have shaped the lives of millions. ` 
        },
        {
            "Author": "Albert Camus",
            "Title": "The Stranger",
            "Genre": "novel",
            "Summary": `The title character is Meursault, an indifferent French Algerian described as "a citizen of France 
                        domiciled in North Africa, a man of the Mediterranean, an homme du midi yet one who hardly partakes of the 
                        traditional Mediterranean culture".He attends his mother's funeral. A few days later, he kills an 
                        Arab man in French Algiers, who was involved in a conflict with a friend. Meursault is tried and sentenced 
                        to death. The story is divided into two parts, presenting Meursault's first-person narrative view before and 
                        after the murder, respectively.`
        },
        {
            "Author": "Albert Camus",
            "Title": "The Plague",
            "Genre": "novel",
            "Summary": `The novel is believed to be based on the cholera epidemic that killed a large percentage of Oran's population in 
                        1849 following French colonization, but the novel is placed in the 1940s.[1] Oran and its environs were struck by 
                        disease multiple times before Camus published this novel. According to a research report by the Centers for Disease 
                        Control and Prevention, Oran was decimated by the plague in 1556 and 1678, but all later outbreaks, in 1921 (185 cases), 
                        1931 (76 cases), and 1944 (95 cases), were very far from the scale of the epidemic described in the novel.`
        },
        {
            "Author": "Albert Camus",
            "Title": "The Fall ",
            "Genre": "novel",
            "Summary": `The Fall (French: La Chute) is a philosophical novel by Albert Camus. First published in 1956, it is his last complete 
                        work of fiction. Set in Amsterdam, The Fall consists of a series of dramatic monologues by the self-proclaimed "judge-penitent" 
                        Jean-Baptiste Clamence, as he reflects upon his life to a stranger. In what amounts to a confession, Clamence tells of 
                        his success as a wealthy Parisian defense lawyer who was highly respected by his colleagues; his crisis, and his ultimate 
                        "fall" from grace, was meant to invoke, in secular terms, The Fall of Man in the Garden of Eden. The Fall explores themes 
                        of innocence, imprisonment, non-existence, and truth. In a eulogy to Albert Camus, existentialist philosopher Jean-Paul Sartre 
                        described the novel as "perhaps the most beautiful and the least understood" of Camus' books.`
        },
        {  
            "Author": "Jane Austen",
            "Title": "Pride and Prejudice",
            "Genre": "romance novel",
            "Summary": `Pride and Prejudice is a romance novel by Jane Austen, first published in 1813. 
                        The story charts the emotional development of the protagonist, Elizabeth Bennet, 
                        who learns the error of making hasty judgements and comes to appreciate the difference 
                        between the superficial and the essential. The comedy of the writing lies in the depiction 
                        of manners, education, marriage and money in the British Regency.`
        },
        {
            "Author": "Jane Austen",
            "Title": "Sense and Sensibility",
            "Genre": "romance novel",
            "Summary": `The novel follows the young women to their new home with their widowed mother, a meagre cottage 
                        on the property of a distant relative, where they experience love, romance and heartbreak. 
                        The novel is set in southwest England, London and Sussex between 1792 and 1797.`
        },
        {
            "Author": "Jane Austen",
            "Title": "Mansfield Park",
            "Genre": "romance novel",
            "Summary": `Mansfield Park is the third published novel by Jane Austen, first published in 1814. The novel 
                        tells the story of Fanny Price starting when her overburdened family sends her at age 10 to live 
                        in the household of her wealthy aunt and uncle, through to her marriage.`
        },
        {
            "Author": "Fyodor Dostoevsky",
            "Title": "The Idiot",
            "Genre": "Philosophical novel",
            "Summary": `The title is an ironic reference to the central character of the novel, Prince (Knyaz) Lev Nikolaevich Myshkin, 
                        a young man whose goodness and open-hearted simplicity lead many of the more worldly characters he encounters 
                        to mistakenly assume that he lacks intelligence and insight. In the character of Prince Myshkin, 
                        Dostoevsky set himself the task of depicting "the positively good and beautiful man".
                        The novel examines the consequences of placing such a unique individual at the centre of the conflicts, 
                        desires, passions and egoism of worldly society, both for the man himself and for those with whom he becomes 
                        involved. The result, according to philosopher A.C. Grayling, is "one of the most excoriating, compelling and 
                        remarkable books ever written; and without question one of the greatest."`
        },
        {
            "Author": "Fyodor Dostoevsky",
            "Title": "Humiliated and Insulted",
            "Genre": "Philosophical novel",
            "Summary": `Natasha leaves her parents' home and runs away with Alyosha (prince Alexey) – the son of Prince Valkovsky. 
                        As a result of his pain, her father, Nikolai, curses her. The only friend that remains by Natasha's side 
                        is Ivan – her childhood friend who is deeply in love with her, and whom Natasha has rejected despite their 
                        being engaged. Prince Valkovsky tries to destroy Alyosha's plans to marry Natasha, and wants to make him 
                        marry the rich princess Katerina. Alyosha is a naïve but loveable young man who is easily manipulated by 
                        his father. Following his father's plan, Alyosha falls in love with Katerina, but still loves Natasha. He is 
                        constantly torn between these two women, too indecisive and infatuated with both to make a decision. 
                        Eventually, Natasha sacrifices her own feelings and withdraws in order for Alyosha to choose Katerina. 
                        Meanwhile, Ivan rescues an orphan girl, Elena (known as Nellie), from the clutches of a procuress and learns 
                        that her mother ran away from her father's (Smith's) home with her sweetheart, a man who abandoned her when 
                        Nellie's mother gave birth. It is later revealed that Prince Valkovsky is Nellie's father and her parents 
                        were legally married. The poor woman and her daughter come back to Petersburg and find Smith; Nellie's mother 
                        asks forgiveness, but he rejects them. Nellie's mother is dying and she makes Nellie promise to never go for
                        help to her real father, whose name is on a document she leaves her daughter. In attempt to make Nikolai 
                        (Natasha's father) reconcile with Natasha, Ivan persuades Nikolai and his wife to adopt Nellie. By telling 
                        them her life story, Nellie makes Nikolai's heart soften and he forgives Natasha and removes his curse, and 
                        they are reunited. Natasha's family plan to move from Petersburg, but just before they leave Nellie dies from 
                        a chronic heart condition; the little girl makes it clear to Ivan she does not forgive her father for his cruel 
                        reatment of her mother. She also tells him he should marry Natasha. The story ends on an ambiguous note with
                        Natasha and Ivan reflecting on the events that have unfolded.`
        },
        {
            "Author": "Fyodor Dostoevsky",
            "Title": "The Brothers Karamazov",
            "Genre": "Philosophical novel",
            "Summary": `The Brothers Karamazov is a passionate philosophical novel set in 19th-century Russia, that enters 
                        deeply into the ethical debates of God, free will, and morality. It is a spiritual drama of moral 
                        struggles concerning faith, doubt, judgment, and reason, set against a modernizing Russia, with a 
                        plot which revolves around the subject of patricide. Dostoyevsky composed much of the novel in Staraya 
                        Russa, which inspired the main setting.Since its publication, it has been acclaimed as one of 
                        the supreme achievements in world literature.`
        }
        ]
    },
        {
        "Genre": "Philosophical novel",
        "books": [
        {
            "Title": "No Longer at Ease",
            "Author": "Chinua Achebe",
            "Genre": "novel",
            "Summary": `No Longer at Ease is a 1960 novel by Nigerian author Chinua Achebe. It is the story of an Igbo man, 
            Obi Okonkwo, who leaves his village for a British education and a job in the Nigerian colonial civil service, 
            but struggles to adapt to a Western lifestyle and ends up taking a bribe. The novel is the second work in what 
            is sometimes referred to as the "African trilogy", following Things Fall Apart and preceding Arrow of God. 
            Things Fall Apart concerns the struggle of Obi Okonkwo's grandfather Okonkwo against the changes brought by 
            the English.` 
        },
        {
            "Title": "A Man of the People",
            "Author": "Chinua Achebe",
            "Genre": "novel",
            "Summary": `A Man of the People (1966) is the fourth novel by Chinua Achebe. This satirical novel is a
                     story told by the young and educated narrator, Odili, on his conflict with Chief Nanga, his former 
                     teacher who enters a career in politics in an unnamed modern African country. Odili represents the 
                     changing younger generation; Nanga represents the traditional customs of Nigeria. The book ends with 
                     a military coup, similar to the real-life coups of Johnson Aguiyi-Ironsi, Chukwuma Kaduna Nzeogwu and 
                     Yakubu Gowon.` 
        },
        {
            "Author": "Honor\u00e9 de Balzac",
            "Title": "Le P\u00e8re Goriot",
            "Genre": "novel",
            "Summary": `Le Père Goriot is an 1835 novel by French novelist and playwright Honoré de Balzac, 
                        included in the Scènes de la vie privée section of his novel sequence La Comédie humaine. 
                        Set in Paris in 1819, it follows the intertwined lives of three characters: the elderly doting Goriot; 
                        a mysterious criminal-in-hiding named Vautrin; and a naive law student named Eugène de Rastignac.`
        },
        {
            "Author": "Honor\u00e9 de Balzac",
            "Title": "A Woman of Thirty",
            "Genre": "novel",
            "Summary": `Balzac’s flawed novel, A Woman of Thirty, is essentially a character study of a woman named Julie who 
                        makes incorrect choices, ruins her life and the consequences of those choices to her children. The plot 
                        starts off very well but then loses its focus, finally wandering into dodgy soap territory laced with 
                        coincidence. `
        },
        {
            "Author": "Honor\u00e9 de Balzac",
            "Title": "Cousin Bette (Modern Library Classics)",
            "Genre": "novel",
            "Summary": `Bette is a wronged soul; and when her passion does break, it is, as Balzac says, sublime and terrifying,” 
                        wrote V. S. Pritchett. A late masterpiece in Balzac’s La Comédie Humaine, Cousin Bette is the story of a 
                        Vosges peasant who rebels against her scornful upper-class relatives, skillfully turning their selfish 
                        obsessions against them. The novel exemplifies what Henry James described as Balzac’s “huge, all-compassing, 
                        all-desiring, all-devouring love of reality.”`
        },
        {
            "Author": "Giovanni Boccaccio",
            "Title": "The Decameron",
            "Genre": "novel",
            "Summary": `The Decameron is a collection of novellas by the 14th-century Italian author Giovanni Boccaccio. 
                        The book is structured as a frame story containing 100 tales told by a group of seven young women and three 
                        young men sheltering in a secluded villa just outside Florence to escape the Black Death, which was afflicting 
                        the city. Boccaccio probably conceived the Decameron after the epidemic of 1348, and completed it by 1353. 
                        The various tales of love in The Decameron range from the erotic to the tragic. Tales of wit, practical jokes, 
                        and life lessons contribute to the mosaic. In addition to its literary value and widespread influence 
                        (for example on Chaucer's The Canterbury Tales), it provides a document of life at the time. Written in the 
                        vernacular of the Florentine language, it is considered a masterpiece of classical early Italian prose.` 
        },
        {
            "Author": "Giovanni Boccaccio",
            "Title": "Amorosa visione ",
            "Genre": "novel",
            "Summary": `Amorosa visione is a narrative poem by Boccaccio, full of echoes of the Divine Comedy and consisting of 50 
                        canti in terza rima. It tells of a dream in which the poet sees, in sequence, the triumphs of Wisdom, 
                        Earthly Glory, Wealth, Love, all-destroying Fortune (and her servant Death), and thereby becomes worthy of 
                        the now heavenly love of Fiammetta. The triumphs include mythological, classical and contemporary medieval 
                        figures. Their moral, cultural and historical architecture was without precedent, and led Petrarch to create 
                        his own Trionfi on the same model. Among contemporaries Giotto and Dante stand out, the latter being 
                        celebrated above any other artist, ancient or modern.`
        },
        {
            "Author": "Giovanni Boccaccio",
            "Title": "Corbaccio",
            "Genre": "novel",
            "Summary": `The work is narrated in the first person and opens with a justification (it is not a real prologue) in which the 
                        author declares that he wishes his narrative to be a consolation to those who read it, such as he found thanks 
                        to God and the intercession of Our Lady.The protagonist, desperate because of the unreturned love of a widow, 
                        calls on Death, falls asleep and dreams. In his dream appears a man who declares himself to be the deceased 
                        husband of the widow, who says he has come, sent by God and through the intercession of Our Lady, to free him 
                        from the labyrinth of love into which he has fallen.`  
        },
        {
            "Author": "Emily Bront\u00eb",
            "Title": "Wuthering Heights",
            "Genre": "novel",
            "Summary": `Wuthering Heights is Emily Brontë's only novel. Written between October 1845 and June 1846, Wuthering Heights 
                        was published in 1847 under the pseudonym "Ellis Bell"; Brontë died the following year, aged 30. Wuthering Heights 
                        and Anne Brontë's Agnes Grey were accepted by publisher Thomas Newby before the success of their sister Charlotte's 
                        novel, Jane Eyre. After Emily's death, Charlotte edited the manuscript of Wuthering Heights, and arranged for 
                        the edited version to be published as a posthumous second edition in 1850.` 
        },
        {
            "Author": "Emily Bront\u00eb",
            "Title": "The Night is Darkening Round Me",
            "Genre": "novel",
            "Summary": `Introducing Little Black Classics: 80 books for Penguin's 80th birthday. Little Black Classics celebrate the huge 
                        range and diversity of Penguin Classics, with books from around the world and across many centuries. They take us 
                        from a balloon ride over Victorian London to a garden of blossom in Japan, from Tierra del Fuego to 16th century 
                        California and the Russian steppe. Here are stories lyrical and savage; poems epic and intimate; essays satirical 
                        and inspirational; and ideas that have shaped the lives of millions. ` 
        },
        {
            "Author": "Albert Camus",
            "Title": "The Stranger",
            "Genre": "novel",
            "Summary": `The title character is Meursault, an indifferent French Algerian described as "a citizen of France 
                        domiciled in North Africa, a man of the Mediterranean, an homme du midi yet one who hardly partakes of the 
                        traditional Mediterranean culture".He attends his mother's funeral. A few days later, he kills an 
                        Arab man in French Algiers, who was involved in a conflict with a friend. Meursault is tried and sentenced 
                        to death. The story is divided into two parts, presenting Meursault's first-person narrative view before and 
                        after the murder, respectively.`
        },
        {
            "Author": "Albert Camus",
            "Title": "The Plague",
            "Genre": "novel",
            "Summary": `The novel is believed to be based on the cholera epidemic that killed a large percentage of Oran's population in 
                        1849 following French colonization, but the novel is placed in the 1940s.[1] Oran and its environs were struck by 
                        disease multiple times before Camus published this novel. According to a research report by the Centers for Disease 
                        Control and Prevention, Oran was decimated by the plague in 1556 and 1678, but all later outbreaks, in 1921 (185 cases), 
                        1931 (76 cases), and 1944 (95 cases), were very far from the scale of the epidemic described in the novel.`
        },
        {
            "Author": "Albert Camus",
            "Title": "The Fall ",
            "Genre": "novel",
            "Summary": `The Fall (French: La Chute) is a philosophical novel by Albert Camus. First published in 1956, it is his last complete 
                        work of fiction. Set in Amsterdam, The Fall consists of a series of dramatic monologues by the self-proclaimed "judge-penitent" 
                        Jean-Baptiste Clamence, as he reflects upon his life to a stranger. In what amounts to a confession, Clamence tells of 
                        his success as a wealthy Parisian defense lawyer who was highly respected by his colleagues; his crisis, and his ultimate 
                        "fall" from grace, was meant to invoke, in secular terms, The Fall of Man in the Garden of Eden. The Fall explores themes 
                        of innocence, imprisonment, non-existence, and truth. In a eulogy to Albert Camus, existentialist philosopher Jean-Paul Sartre 
                        described the novel as "perhaps the most beautiful and the least understood" of Camus' books.`
        },
        {  
            "Author": "Jane Austen",
            "Title": "Pride and Prejudice",
            "Genre": "romance novel",
            "Summary": `Pride and Prejudice is a romance novel by Jane Austen, first published in 1813. 
                        The story charts the emotional development of the protagonist, Elizabeth Bennet, 
                        who learns the error of making hasty judgements and comes to appreciate the difference 
                        between the superficial and the essential. The comedy of the writing lies in the depiction 
                        of manners, education, marriage and money in the British Regency.`
        },
        {
            "Author": "Jane Austen",
            "Title": "Sense and Sensibility",
            "Genre": "romance novel",
            "Summary": `The novel follows the young women to their new home with their widowed mother, a meagre cottage 
                        on the property of a distant relative, where they experience love, romance and heartbreak. 
                        The novel is set in southwest England, London and Sussex between 1792 and 1797.`
        },
        {
            "Author": "Jane Austen",
            "Title": "Mansfield Park",
            "Genre": "romance novel",
            "Summary": `Mansfield Park is the third published novel by Jane Austen, first published in 1814. The novel 
                        tells the story of Fanny Price starting when her overburdened family sends her at age 10 to live 
                        in the household of her wealthy aunt and uncle, through to her marriage.`
        },
        {
            "Author": "Fyodor Dostoevsky",
            "Title": "The Idiot",
            "Genre": "Philosophical novel",
            "Summary": `The title is an ironic reference to the central character of the novel, Prince (Knyaz) Lev Nikolaevich Myshkin, 
                        a young man whose goodness and open-hearted simplicity lead many of the more worldly characters he encounters 
                        to mistakenly assume that he lacks intelligence and insight. In the character of Prince Myshkin, 
                        Dostoevsky set himself the task of depicting "the positively good and beautiful man".
                        The novel examines the consequences of placing such a unique individual at the centre of the conflicts, 
                        desires, passions and egoism of worldly society, both for the man himself and for those with whom he becomes 
                        involved. The result, according to philosopher A.C. Grayling, is "one of the most excoriating, compelling and 
                        remarkable books ever written; and without question one of the greatest."`
        },
        {
            "Author": "Fyodor Dostoevsky",
            "Title": "Humiliated and Insulted",
            "Genre": "Philosophical novel",
            "Summary": `Natasha leaves her parents' home and runs away with Alyosha (prince Alexey) – the son of Prince Valkovsky. 
                        As a result of his pain, her father, Nikolai, curses her. The only friend that remains by Natasha's side 
                        is Ivan – her childhood friend who is deeply in love with her, and whom Natasha has rejected despite their 
                        being engaged. Prince Valkovsky tries to destroy Alyosha's plans to marry Natasha, and wants to make him 
                        marry the rich princess Katerina. Alyosha is a naïve but loveable young man who is easily manipulated by 
                        his father. Following his father's plan, Alyosha falls in love with Katerina, but still loves Natasha. He is 
                        constantly torn between these two women, too indecisive and infatuated with both to make a decision. 
                        Eventually, Natasha sacrifices her own feelings and withdraws in order for Alyosha to choose Katerina. 
                        Meanwhile, Ivan rescues an orphan girl, Elena (known as Nellie), from the clutches of a procuress and learns 
                        that her mother ran away from her father's (Smith's) home with her sweetheart, a man who abandoned her when 
                        Nellie's mother gave birth. It is later revealed that Prince Valkovsky is Nellie's father and her parents 
                        were legally married. The poor woman and her daughter come back to Petersburg and find Smith; Nellie's mother 
                        asks forgiveness, but he rejects them. Nellie's mother is dying and she makes Nellie promise to never go for
                        help to her real father, whose name is on a document she leaves her daughter. In attempt to make Nikolai 
                        (Natasha's father) reconcile with Natasha, Ivan persuades Nikolai and his wife to adopt Nellie. By telling 
                        them her life story, Nellie makes Nikolai's heart soften and he forgives Natasha and removes his curse, and 
                        they are reunited. Natasha's family plan to move from Petersburg, but just before they leave Nellie dies from 
                        a chronic heart condition; the little girl makes it clear to Ivan she does not forgive her father for his cruel 
                        reatment of her mother. She also tells him he should marry Natasha. The story ends on an ambiguous note with
                        Natasha and Ivan reflecting on the events that have unfolded.`
        },
        {
            "Author": "Fyodor Dostoevsky",
            "Title": "The Brothers Karamazov",
            "Genre": "Philosophical novel",
            "Summary": `The Brothers Karamazov is a passionate philosophical novel set in 19th-century Russia, that enters 
                        deeply into the ethical debates of God, free will, and morality. It is a spiritual drama of moral 
                        struggles concerning faith, doubt, judgment, and reason, set against a modernizing Russia, with a 
                        plot which revolves around the subject of patricide. Dostoyevsky composed much of the novel in Staraya 
                        Russa, which inspired the main setting.Since its publication, it has been acclaimed as one of 
                        the supreme achievements in world literature.`
        }
        ]
    },
    {
        "Genre": "short stories",
        "books": [
        {
            "Author": "Jorge Luis Borges",
            "Title": "Ficciones",
            "Genre": "short stories",
            "Summary": `Ficciones is the most popular collection of short stories by Argentine writer and poet Jorge Luis Borges, 
                        often considered the best introduction to his work. Ficciones should not be confused with Labyrinths, 
                        although they have much in common. Labyrinths is a separate translation of Borges's material into English, 
                        by James E. Irby, that, like the translation into English of Ficciones, appeared in 1962. Together, 
                        these two translations led to much of Borges's worldwide fame in the 1960s. Several stories appear in both 
                        volumes. "The Approach to Al-Mu'tasim" appeared originally in History of Eternity (1936).`
        },
        {
            "Author": "Jorge Luis Borges",
            "Title": "Blue Tigers",
            "Genre": "short stories",
            "Summary": `The narrator of the story, Alexander Craigie, is a professor of logic who teaches at the University of Lahore 
                        in India, although he himself is of Scottish descent. He states that, since childhood, he has been fascinated 
                        by tigers, and when he hears of reports that a brilliantly colored blue tiger has been seen in the Ganges delta, 
                        he sets out to investigate.`
        },
        {
            "Author": "Jorge Luis Borges",
            "Title": "The Circular Ruins",
            "Genre": "short stories",
            "Summary": `The short story deals with themes that recur in Borges's work: idealism, the manifestation of thoughts in the 
                        "real world", meaningful dreams, and immortality. The manifestation of thoughts as objects in the real world was 
                        a theme in "Tlön, Uqbar, Orbis Tertius", but here Borges takes it to another level: the manifestation of human 
                        beings rather than simple objects.`
        }
        ]
    },
    {
        "Genre": "Historical fiction",
        "books": [
        {
        "Title": "Things Fall Apart",
        "Author": "Chinua Achebe",
        "Genre": "Historical fiction",
        "Summary": `Things Fall Apart is a literary novel written by Nigerian author Chinua Achebe in 1958. 
                    The story's main theme concerns pre- and post-colonial life in late nineteenth century Nigeria. 
                    It is seen as the archetypal modern African novel in English, one of the first to receive global critical acclaim.
                    It is a staple book in schools throughout Africa and is widely read and studied in English-speaking countries around 
                    the world. It was first published in 1958 by William Heinemann Ltd in the UK; in 1962, it was also the first work
                    published in Heinemann's African Writers Series. The title of the novel comes from a line in W. B. Yeats' poem
                    'The Second Coming'.`
        }
        ]
    }      
] 

export default dataGenre;