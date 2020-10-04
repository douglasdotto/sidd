using AppSidd.Domain.Specifications;
using System.Collections.Generic;

namespace AppSidd.Domain.Project
{
    internal class PfefferSpecifications : List<SpecificationBase<Pfeffer>>
    {
        public PfefferSpecifications()
        {
            AddRange(new List<SpecificationBase<Pfeffer>>() {
            });
        }
    }
}