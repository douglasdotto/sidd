using AppSidd.Domain.Specifications;
using System.Collections.Generic;

namespace AppSidd.Domain.Project
{
    internal class AcolhimentoSpecifications : List<SpecificationBase<Acolhimento>>
    {
        public AcolhimentoSpecifications()
        {
            AddRange(new List<SpecificationBase<Acolhimento>>() {
            });
        }
    }
}