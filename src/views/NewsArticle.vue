<template>
<div>
  <img :src="article.fields.thumbnail" alt="">

  <div class="content">
    <h2>{{article.fields.headline}}</h2>
    <p>{{article.fields.bodyText}}</p>
  </div>
</div>
    
</template>
<script>

export default {
    name:'newsarticle',
    props: ["id"],
  data(){
   return{
    title:"newsarticle",
    
    article:
            {
                "id": "uk-news/2019/jun/27/home-office-windrush-report-damns-hostile-environment-policy",
                "type": "article",
                "sectionId": "uk-news",
                "sectionName": "UK news",
                "webPublicationDate": "2019-06-27T22:21:56Z",
                "webTitle": "Home Office Windrush report damns hostile environment policy",
                "webUrl": "https://www.theguardian.com/uk-news/2019/jun/27/home-office-windrush-report-damns-hostile-environment-policy",
                "apiUrl": "https://content.guardianapis.com/uk-news/2019/jun/27/home-office-windrush-report-damns-hostile-environment-policy",
                "fields": {
                    "headline": "Home Office Windrush report damns hostile environment policy",
                    "thumbnail": "https://media.guim.co.uk/355624efd0870f248d9588af598f681db6f3ee06/0_10_4134_2481/500.jpg",
                    "bodyText": "The Home Office failed in its legal duty to counter racial discrimination when it implemented its anti-immigration hostile environment programme, a draft investigation into the causes of the Windrush scandal, commissioned by the department itself, has reportedly found. The damning document accuses officials of recklessness and a reluctance to acknowledge and learn from their mistakes, according to Channel 4 News, which was shown a leaked version of the review. The extracts of the draft report by Wendy Williams, an inspector of constabulary, highlights the Home Office’s failure to admit it was wrong and to issue an unqualified apology. Williams was commissioned to undertake the “Windrush lessons learned” review by the home secretary, Sajid Javid, last summer in the wake of reporting on the scandal by the Guardian. “While everyone I spoke to was rightly appalled by what happened, this was often juxtaposed with a self-justification, either in the form of it was unforeseen, unforeseeable and therefore unavoidable ... or a failure on the part of individuals to prove their status,” Williams wrote, in extracts seen by Channel 4 News. Theresa May introduced a series of hostile environment policies, under which she sought to make life intolerable for people who had illegally entered the UK, in a bid to cut inward immigration numbers during her time as home secretary. Williams’s review focuses on the impact of immigration laws from that period. As a result of this legislation, thousands of people who had been living legally in the UK for decades found themselves wrongly classified as illegal immigrants. Many lost their jobs, were made homeless or denied healthcare and some were detained and deported to countries they had left as children. Judy Griffith, 64, who arrived in the UK from Barbados in 1963 when she was nine and who has worked and paid taxes here for decades, was informed she was an illegal immigrant by Jobcentre officials two years ago. She was unable to work and ineligible for benefits, remains in debt and and has had no compensation or personal apology. She said she was unsurprised by the report’s findings. “The policies were insidious, deliberate, nasty and racist,” she said. “There’s been no proper apology. When you look at the compensation scheme it makes you think they are in no way sorry.” Draft extracts of Williams’ review suggest the implementation of May’s policies was flawed because “it failed to adequately consider the past ... It failed to adequately consider the impact on people ... It also failed to adequately mitigate equalities issues including the potential for discrimination, particularly in housing”. The document reportedly adds that the Home Office failed to effectively evaluate the effectiveness of its policies. “This appears particularly reckless considering the significant warnings that the department was given about their potential consequences.” The shadow women and equalities secretary, Dawn Butler, said the report was “extremely damning” and that the legislation that established the hostile environment was “deliberately discriminatory and racist towards people that were invited to this country and were British citizens”. Her Labour colleague, David Lammy, who has been a vocal campaigner on the issue, demanded that the government scrap the hostile environment policy and said it would be May’s lasting legacy. Williams also describes a “defensive culture that results in an unwillingness to learn from past mistakes” within the Home Office. She reportedly recommends that the department’s staff be educated in the UK’s colonial past and proposes that government ministers should admit that they were wrong and provide an unqualified apology. “Ministers/department should admit that it was wrong and provide an unqualified apology...the sincerity of this apology will be judged by how far the department demonstrates contrition.” Satbir Singh, the chief executive of the Joint Council for the Welfare of Immigrants, said: “This review confirms what we at JCWI have said from the beginning: Windrush was no accident, but the inevitable result of a broken immigration system, driven by the divisive politics of scapegoating and scaremongering. “After today, there is nowhere left to hide. The Tory leadership candidates must pledge to scrap the hostile environment, repeal right to rent [which demands landlords check tenants’ immigration status] and rebuild the immigration system from the ground up. We expect the government to release the full report without delay so that we can begin finally to build a humane, fair and functional immigration system.” A Home Office spokesman said: “We do not comment on leaked documents.”"
                },
                "isHosted": false,
                "pillarId": "pillar/news",
                "pillarName": "News"
            }
   
  }},
  
}
</script>
<style scoped>
.content{
margin: 0 30px;
}
h2{
  margin-bottom: 15px;
}
p{
  text-align: justify;
}

</style>
