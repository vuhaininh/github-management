import { renderComponent , expect } from '../test_helper';
import { unLoadRepos,loadedRepos} from '../sample_data';
import RepoList from '../../src/components/repo_list';

describe('Repo List Component', () => {
  describe('when Repositories are not loaded', () => {
    let component;
    beforeEach(() => {
      component = renderComponent(RepoList,null, {repos:unLoadRepos});
    })
    it('shows unloaded or error message', () => {
      expect(component.find('div')).to.have.class('error')
    });
    it('shows correct message', () => {
      expect(component).to.contain(unLoadRepos.message);
    });
  });

  describe('when Repositories are loaded successfully', () => {
    let component;
    beforeEach(() => {
      component = renderComponent(RepoList,null, {repos:loadedRepos});
    })
    it('shows Repo List Items', () => {
      expect(component.find('div')).to.have.class('repo-item');
    });
    it('shows correct number of repositories', () => {
      expect(component.find('div .repo-item').length).equal(loadedRepos.length);
    });
    describe('Repository Item', () => {
      it('shows correct repository name', () => {
        expect(component.find('div .repo-item').first()).to.contain(loadedRepos[0].name);
      });
      it('shows correct URL', () => {
        expect(component.find('div .repo-item a').first()).attr('href').to.contain(loadedRepos[0].html_url);
      });
      it('shows correct language', () => {
        expect(component.find('div .repo-item').first()).to.contain(loadedRepos[0].language);
      });
      it('shows correct number of branches', () => {
        expect(component.find('div .repo-item').first()).to.contain(loadedRepos[0].branches.length);
      });
      it('shows correct public status', () => {
        expect(component.find('div .repo-item').first()).to.contain("public");
      });
      it('shows correct private status', () => {
        expect(component.find('div .repo-item').last()).to.contain("private");
      });
    });

    describe('Branches of Item', () => {
      it('shows correct number of branches in List', () => {
        expect(component.find('div .repo-item').first().find('.repo-branch').length).equal(loadedRepos[0].branches.length);
      });
      it('shows correct branch name', () => {
        expect(component.find('div .repo-item').first().find('.repo-branch')).to.contain(loadedRepos[0].branches[0].name);
      });
      describe('Can expand to show more information', () =>{
        let btn,info;
        beforeEach(() => {
          btn = component.find('div .repo-item').first().find('.btn');
          info = component.find('div .repo-item').first().find('.branch-list')
        })
        it('button shows number of branches', () => {
          expect(btn).to.contain(loadedRepos[0].branches.length);
        });
        it('has correct data-target id', () => {
          expect(btn).to.have.attr('data-target','#'+loadedRepos[0].id);
        });
        it('has data-toggle collapse', () => {
          expect(btn).to.have.attr('data-toggle','collapse');
        });
        it('has info div to display branches info', () => {
          expect(info).to.exist;
        });
        it('has info div having correct id', () => {
          expect(info).to.have.id(''+loadedRepos[0].id);
        });
        it('has info div having class collapse', () => {
          expect(info).to.have.class('collapse');
        });
      });
    });

  });
});
