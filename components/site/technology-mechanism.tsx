const mechanisms = {
 encapsulation: {title:"성분을 담는 구조를 설계합니다.",steps:["활성 성분","구조 형성","제형 적용 검토"],copy:"담으려는 성분과 이를 둘러싸는 재료를 함께 선택합니다. 입자의 구조와 실제 배합 조건을 구분해서 검토합니다.",kind:"shell"},
 solubilization: {title:"물과 성분 사이의 관계를 조정합니다.",steps:["난용성 성분","계면활성제 조합","외관·안정성 검토"],copy:"성분의 농도와 계면활성제 조합을 바탕으로 수계 제형에서의 거동을 살펴봅니다.",kind:"mix"},
 stabilization: {title:"구조와 환경을 함께 살펴봅니다.",steps:["활성 성분","액정·겔 구조","보관 조건 검토"],copy:"성분을 담는 구조뿐 아니라 pH, 온도, 제조 과정에서 구조가 어떻게 유지되는지 확인합니다.",kind:"layers"},
 purification: {title:"필요한 품질 기준을 명확히 합니다.",steps:["원료 상태 확인","정제 과정","분석·규격 확인"],copy:"순도, 취, 색상 등 목표 기준을 먼저 정하고 분석 자료와 실제 규격을 대조합니다.",kind:"refine"},
} as const;
export function TechnologyMechanism({slug}:{slug:keyof typeof mechanisms}) {
 const m=mechanisms[slug];
 return <section className="te-mechanism"><div className="te-mechanism-copy"><p className="te-kicker">PROCESS AT A GLANCE</p><h2>{m.title}</h2><p>{m.copy}</p></div><div className="te-process-grid">{m.steps.map((step,i)=><div key={step} className="te-process-step"><div className={`te-process-art te-process-${m.kind} stage-${i}`} aria-hidden="true"><i/><i/><i/><i/><i/></div><span>0{i+1}</span><h3>{step}</h3></div>)}</div></section>;
}
